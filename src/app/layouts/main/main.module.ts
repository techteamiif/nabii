import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { AboutComponent } from "./components/about/about.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { BlogComponent } from "./components/blog/blog.component";
import { PillarsComponent } from "./components/pillars/pillars.component";
import { PillarComponent } from "./components/pillar/pillar.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { GovernanceComponent } from "./components/governance/governance.component";
import { SecretariatComponent } from "./components/secretariat/secretariat.component";
import { ImpactInvestingComponent } from "./components/impact-investing/impact-investing.component";
import { MembershipComponent } from "./components/membership/membership.component";
// import { Select2Module } from "ng-select2-component";

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutUsComponent,
    AboutComponent,
    BlogsComponent,
    BlogComponent,
    PillarsComponent,
    PillarComponent,
    ContactUsComponent,
    GovernanceComponent,
    SecretariatComponent,
    ImpactInvestingComponent,
    MembershipComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // Select2Module,
  ],
})
export class MainModule {}
