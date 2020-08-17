import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Listing, DefaultListing } from "../interfaces/listing";

// Services Import
import { AuthService } from "../services/auth.service";
@Injectable({
  providedIn: "root",
})
export class ListingsService {
  constructor(
    private httpClient: HttpClient,
    private AuthService: AuthService
  ) {}

  // URL
  url = this.AuthService.URL;

  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });
  options = {
    headers: this.httpHeaders,
  };

  // Variables
  ListingData: Listing[];
  FeaturedListingData: Listing[];

  // Event Emitter

  getListings() {
    return this.httpClient
      .get(this.url + "api/listings", this.options)
      .subscribe((data) => {
        this.ListingData = data["data"];
        console.log(this.ListingData);
        this.FeaturedListingData = data["data"];
      });
  }

  getPublicOwnedListings(userId) {
    return this.httpClient.get(
      this.url + "api/profiles/" + userId + "/listings/owner",
      this.options
    );
  }

  getSelectedListing(listingId) {
    return this.httpClient.get(
      this.url + "api/listings/" + listingId + "/raw",
      this.options
    );
  }

  // Listing Likes
  getSelectedListingLikes(listingId) {
    return this.httpClient.get(
      this.url + "api/listings/" + listingId + "/likes",
      this.options
    );
  }
  // Listing FAQ
  getSelectedListingFAQ(listingId) {
    return this.httpClient.get(
      this.url + "api/listings/" + listingId + "/faqs",
      this.options
    );
  }

  // Listing Skills
  getSelectedListingSkills(listingId) {
    return this.httpClient.get(
      this.url + "api/listings/" + listingId + "/listing-skills",
      this.options
    );
  }

  // Listing Stories
  getSelectedListingStories(listingId) {
    return this.httpClient.get(
      this.url + "api/listings/stories/" + listingId,
      this.options
    );
  }

  // Listing Comments
  getSelectedListingComments(listingId) {
    return this.httpClient.get(
      this.url + "api/listings/" + listingId + "/listing-comments",
      this.options
    );
  }

  // Updates
  getSelectedListingUpdates(listingId) {
    return this.httpClient.get(
      this.url + "api/listings/" + listingId + "/listing-updates",
      this.options
    );
  }

  // Listing Milestones
  getSelectedListingMilestones(listingId) {
    return this.httpClient.get(
      this.url + "api/listings/" + listingId + "/milestones",
      this.options
    );
  }

  // Listing Hashtags
  getSelectedListingHashtags(listingId) {
    return this.httpClient.get(
      this.url + "api/listings/" + listingId + "/hashtags",
      this.options
    );
  }

  // Liked Listing - by User
  getLikedListing() {
    return this.httpClient.get(
      this.url + "api/profiles/" + this.AuthService.LoggedInUserID + "/likes",
      this.options
    );
  }

  // Write
  uploadFile(fd) {
    return this.httpClient.post(this.url + "test/file-upload", fd);
  }

  createListing(data) {
    return this.httpClient.post(
      this.url + "api/listings",
      data,
      this.AuthService.OnlyAuthHttpHeaders
    );
  }

  UpdateListingStory(listingId, data) {
    return this.httpClient.put(
      this.url + "api/listings/stories/" + listingId,
      data,
      this.AuthService.AuthOptions
    );
  }

  createListingMilestones(data) {
    return this.httpClient.post(
      this.url + "api/milestones",
      data,
      this.AuthService.AuthOptions
    );
  }

  createListingHashtags(data) {
    return this.httpClient.post(
      this.url + "api/hashtags",
      data,
      this.AuthService.AuthOptions
    );
  }

  createListingSkills(data) {
    return this.httpClient.post(
      this.url + "api/skills",
      {
        skill: data,
      },
      this.AuthService.AuthOptions
    );
  }

  connectListingSkills(data) {
    return this.httpClient.post(
      this.url + "api/listing-skills",
      data,
      this.AuthService.AuthOptions
    );
  }

  createListingFAQ(data) {
    return this.httpClient.post(
      this.url + "api/faqs",
      data,
      this.AuthService.AuthOptions
    );
  }

  // Comments
  CreateListingComments(data) {
    return this.httpClient.post(
      this.url + "api/listing-comments",
      data,
      this.AuthService.AuthOptions
    );
  }

  // Updates
  CreateListingUpdates(data) {
    return this.httpClient.post(
      this.url + "api/listing-updates",
      data,
      this.AuthService.OnlyAuthHttpHeaders
    );
  }

  // Like A Listing
  LikedListing(listing_id) {
    return this.httpClient.post(
      this.url + "api/likes",
      { listing_id: listing_id },
      this.AuthService.AuthOptions
    );
  }

  UnLikedListing(like_id) {
    return this.httpClient.delete(
      this.url + "api/likes/" + like_id,
      this.AuthService.AuthOptions
    );
  }

  // Edit Listing
  // Delete
  removeListing(listingId) {
    return this.httpClient.put(
      this.url + "api/listings/" + listingId + "/deactivate",
      {},
      this.AuthService.AuthOptions
    );
  }

  removeMilestone(milestone_id) {
    return this.httpClient.delete(
      this.url + "api/milestones/" + milestone_id,
      this.AuthService.AuthOptions
    );
  }

  removeFAQ(faq_id) {
    return this.httpClient.delete(
      this.url + "api/faqs/" + faq_id,
      this.AuthService.AuthOptions
    );
  }

  removeHashtags(hashtag_id) {
    return this.httpClient.delete(
      this.url + "api/hashtags/" + hashtag_id,
      this.AuthService.AuthOptions
    );
  }
}
