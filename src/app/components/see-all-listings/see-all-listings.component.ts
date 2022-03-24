import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/services/listing-service.service';

@Component({
  selector: 'app-see-all-listings',
  templateUrl: './see-all-listings.component.html',
  styleUrls: ['./see-all-listings.component.css']
})
export class SeeAllListingsComponent implements OnInit {

  showEdit: any[50] = []

  showDelete: any[50] = []

  listings: any[] = [
    // {
    //   "imgThumbnail": "https://www.nps.gov/apco/learn/historyculture/images/Peers-House.jpg",
    //   "listingId": "123",
    //   "location": "123 mains st",
    //   "buyoutPrice": "500",
    //   "seller id": "343",
    //   "description": "description goes here"
  ]

  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.listingService.getListings().subscribe(data => {
      this.listings = data;
      
      // this.listings.push(show);
      console.log(this.listings)
    })
  }

  clickSearch(): void {
    console.log("button clicked");
  }

  onClickHandler(){
    console.log('button clicked')
  }

  editButtonHandler(data: any){
    if(!this.showEdit[data]){
      this.showEdit[data] = true
    }
    else{
      this.showEdit[data] = false
    }
  }

  deleteButtonHandler(data: any){
    if(!this.showDelete[data]){
      this.showDelete[data] = true
    }
    else{
      this.showDelete[data] = false
    }
  }

  deleteRowHandler(id: any){
    this.listingService.deleteListingById(id)
    .subscribe()
    // (data => {
    //   this.listings = data;
      
    //   // this.listings.push(show);
    //   // console.log(this.listings)
    // })
    
  }

  

  onFormSubmit(data: any){
    console.log(data)
  }

  editListing(): boolean{
    return true
  }

}

