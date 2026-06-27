import { Component, OnInit } from '@angular/core';
import { CampaignStatusService } from 'src/app/services/campaign-status.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  prosperityPoints!: number;
  prosperityLevel!: number;
  amountGoldDonated!: number;
  reputation!: number;

  // Prosperity progress
  prosperityMilestones = [0, 4, 9, 15, 22, 30, 39, 50, 64];

  // Shop modifiers based on reputation
  private priceModifierMap = [
    -5, -5, -4, -4, -4, -4, -3, -3, -3, -3, -2, -2, -2, -2, -1, -1, -1, -1,
    0, 0, 0, 0, 0,
    1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5
  ];

  // Donations Milestones
  donationsMilestones = [100, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000];

  constructor(private campaign: CampaignStatusService) {
    const status$ = this.campaign.getStatus$();
    status$.subscribe(
      status => {
        this.prosperityPoints = status.city.prosperityPoints;
        this.prosperityLevel = status.city.prosperityLevel;
        this.amountGoldDonated = status.amountGoldDonated;
        this.reputation = status.party.reputation;
      }
    );
  }

  ngOnInit(): void {
  }

  // Prosperity progress percentage for current level
  get prosperityProgressPercent(): number {
    const currentLevel = this.prosperityLevel;
    const startPoints = this.prosperityMilestones[currentLevel - 1] || 0;
    const nextPoints = this.prosperityMilestones[currentLevel] || 64;
    const currentPointsInLevel = this.prosperityPoints - startPoints;
    const neededInLevel = nextPoints - startPoints;
    return Math.min(100, Math.max(0, (currentPointsInLevel / neededInLevel) * 100));
  }

  get prosperityNextLevelPoints(): number {
    const currentLevel = this.prosperityLevel;
    return this.prosperityMilestones[currentLevel] || 64;
  }

  // Shop Discount/Penalty text based on reputation
  get shopDiscountText(): string {
    const index = Math.max(0, Math.min(this.priceModifierMap.length - 1, 20 - this.reputation));
    const modifier = this.priceModifierMap[index];
    if (modifier < 0) {
      return `Descuento en tienda: ${Math.abs(modifier)} oro`;
    } else if (modifier > 0) {
      return `Recargo en tienda: +${modifier} oro`;
    } else {
      return 'Precios estándar en tienda';
    }
  }

  get reputationProgressPercent(): number {
    // Reputation goes from -20 to +20. Map it to 0-100%
    const minRep = -20;
    const maxRep = 20;
    const clampedRep = Math.max(minRep, Math.min(maxRep, this.reputation));
    return ((clampedRep - minRep) / (maxRep - minRep)) * 100;
  }

  // Sanctuary progress
  get nextDonationMilestone(): number {
    const next = this.donationsMilestones.find(m => m > this.amountGoldDonated);
    return next || 1000;
  }

  get previousDonationMilestone(): number {
    const reversedMilestones = [...this.donationsMilestones].reverse();
    const prev = reversedMilestones.find(m => m <= this.amountGoldDonated);
    return prev || 0;
  }

  get goldNeededForNextDonationMilestone(): number {
    return Math.max(0, this.nextDonationMilestone - this.amountGoldDonated);
  }

  get donationProgressPercent(): number {
    const prev = this.previousDonationMilestone;
    const next = this.nextDonationMilestone;
    const currentInSegment = this.amountGoldDonated - prev;
    const segmentLength = next - prev;
    if (segmentLength <= 0) return 100;
    return Math.min(100, Math.max(0, (currentInSegment / segmentLength) * 100));
  }

}
