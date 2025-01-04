import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private apiUrl = "https://restcountries.com/v3.1/all";

  constructor() {}

  getAllCountries() {
    return axios.get(this.apiUrl).then((response) => response.data);
  }
}
