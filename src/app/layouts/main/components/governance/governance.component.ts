import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Team } from "src/app/interfaces/app";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-governance",
  templateUrl: "./governance.component.html",
  styleUrls: ["./governance.component.scss"],
})
export class GovernanceComponent implements OnInit {
  bgImage = 'url("../../../assets/images/teambanner.png';
  title: string = "Governance";
  team: Team[] = [];
  fetching = true;

  constructor(private appService: AppService, private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.fetchSecretariats();
    this.fetching = false;
  }

  async fetchSecretariats() {
    this.appService.getGovernances().subscribe((res: Team[]) => {
      this.team = res;
    });
  }
}
