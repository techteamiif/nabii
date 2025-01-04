import { Injectable } from "@angular/core";
import {
  Firestore,
  doc,
  collection,
  collectionData,
  docData,
  addDoc,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import {
  Blog,
  IifAbout,
  IifContactUs,
  Partner,
  Slider,
  SocialMedia,
  Team,
} from "../interfaces/app";
import {} from "../interfaces/home";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private db: Firestore) {}

  /**
   * Get All Sliders
   */
  getSliders(): Observable<Slider[]> {
    const slidersRef = collection(this.db, "nabiiSliders");
    return collectionData(slidersRef, { idField: "id" }) as Observable<
      Slider[]
    >;
  }

  /**
   * Get All
   */
  getBlogs(): Observable<Blog[]> {
    const docsRef = collection(this.db, "nabiiBlogs");
    return collectionData(docsRef, { idField: "id" }) as Observable<Blog[]>;
  }
  /**
   * Get Single Document
   */
  getBlog(id: any) {
    const docRef = doc(this.db, `nabiiBlogs/${id}`);
    return docData(docRef, { idField: id }) as Observable<Blog>;
  }

  getAudios(): Observable<Blog[]> {
    const docsRef = collection(this.db, "nabiiAudios");
    return collectionData(docsRef, { idField: "id" }) as Observable<Blog[]>;
  }

  /**
   * Get All
   */
  getSecretariats(): Observable<Team[]> {
    const docsRef = collection(this.db, "nabiiSecretariats");
    return collectionData(docsRef, { idField: "id" }) as Observable<Team[]>;
  }

  /**
   * Get All
   */
  getAllMessages(): Observable<any[]> {
    const docsRef = collection(this.db, "iifContactMessages");
    return collectionData(docsRef, { idField: "id" }) as Observable<any[]>;
  }

  /**
   * Create contact us message
   */
  createMessage(
    id: any,
    firstName: any,
    lastName: any,
    email: any,
    phoneNumber: any,
    subject: any,
    message: any,
  ) {
    const data: IifContactUs = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      subject: subject,
      message: message,
      id: id,
    };

    const docRef = collection(this.db, "iifContactMessages");

    addDoc(docRef, data)
      .then(() => {
        alert("Message successfully sent");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Get All
   */
  getAllNewsletter(): Observable<any[]> {
    const docsRef = collection(this.db, "newsletterSubscribers");
    return collectionData(docsRef, { idField: "id" }) as Observable<any[]>;
  }

  /**
   * Get All
   */
  getAllSocialMedias(): Observable<SocialMedia[]> {
    const docsRef = collection(this.db, "socialMedias");
    return collectionData(docsRef, { idField: "id" }) as Observable<
      SocialMedia[]
    >;
  }

  /**
   * Get All
   */
  getGovernances(): Observable<Team[]> {
    const docsRef = collection(this.db, "nabiiGovernance");
    return collectionData(docsRef, { idField: "id" }) as Observable<Team[]>;
  }

  /**
   * Get All
   */
  getPartners(): Observable<Partner[]> {
    const docsRef = collection(this.db, "iifPartners");
    return collectionData(docsRef, { idField: "id" }) as Observable<Partner[]>;
  }

  /**
   * Get Single Document
   */
  getAboutUs(id: any) {
    const docRef = doc(this.db, `nabiiAboutUs/${id}`);
    return docData(docRef, { idField: id }) as Observable<IifAbout>;
  }

  /**
   * Create contact us message
   */
  contactUs(id: any, payload: any) {
    // const docRef = doc(this.db, "nabiiContactMessages", id);
    const docRef = collection(this.db, "nabiiContactMessages");

    addDoc(docRef, payload)
      .then(() => {
        alert("Message successfully sent");
      })
      .catch((error) => {
        alert(error);
      });
  }

  /**
   * Create contact us message
   */
  joinUs(id: any, payload: any) {
    // const docRef = doc(this.db, "nabiiVolunteers", id);
    const docRef = collection(this.db, "nabiiVolunteers");

    addDoc(docRef, payload)
      .then(() => {
        alert("Message successfully sent");
      })
      .catch((error) => {
        alert(error);
      });
  }

  /**
   * Create Membership
   */
  membership(id: any, payload: any) {
    // const docRef = doc(this.db, "nabiiMembership", id);
    const docRef = collection(this.db, "nabiiMembership");

    addDoc(docRef, payload)
      .then(() => {
        alert(
          "Registration successful, we will be in touch. Kindly forward your evidence of payment to info@impactinvestorsfoundation.org",
        );
      })
      .catch((error) => {
        alert(error);
      });

    //
  }

  /**
   * Create contact us message
   */
  newsletter(id: any, payload: any) {
    // const docRef = doc(this.db, "newsletterSubscribers", id);
    const docRef = collection(this.db, "newsletterSubscribers");

    addDoc(docRef, payload)
      .then(() => {
        alert("Message successfully sent");
      })
      .catch((error) => {
        alert(error);
      });
  }
}
