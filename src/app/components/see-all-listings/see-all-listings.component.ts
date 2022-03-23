import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-all-listings',
  templateUrl: './see-all-listings.component.html',
  styleUrls: ['./see-all-listings.component.css']
})
export class SeeAllListingsComponent implements OnInit {

  listings: any[] = [
    {
      "imgThumbnail": "https://www.nps.gov/apco/learn/historyculture/images/Peers-House.jpg",
      "description": "description goes here"
    },
    {
      "imgThumbnail": "https://www.nps.gov/apco/learn/historyculture/images/Peers-House.jpg",
      "description": "description go yonder"
    },
    {
      "imgThumbnail": "https://www.nps.gov/apco/learn/historyculture/images/Peers-House.jpg",
      "description": "description do go down"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  clickSearch(): void {
    console.log("button clicked");
  }

}

