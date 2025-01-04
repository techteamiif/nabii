import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./layouts/main/components/about-us/about-us.component";
// import { AboutComponent } from "./layouts/main/components/about/about.component";
import { BlogComponent } from "./layouts/main/components/blog/blog.component";
import { BlogsComponent } from "./layouts/main/components/blogs/blogs.component";
import { ContactUsComponent } from "./layouts/main/components/contact-us/contact-us.component";
import { GovernanceComponent } from "./layouts/main/components/governance/governance.component";
import { HomeComponent } from "./layouts/main/components/home/home.component";
import { ImpactInvestingComponent } from "./layouts/main/components/impact-investing/impact-investing.component";
import { MembershipComponent } from "./layouts/main/components/membership/membership.component";
import { PillarComponent } from "./layouts/main/components/pillar/pillar.component";
import { PillarsComponent } from "./layouts/main/components/pillars/pillars.component";
import { SecretariatComponent } from "./layouts/main/components/secretariat/secretariat.component";
import { MainComponent } from "./layouts/main/main.component";

const routes: Routes = [
	{
		path: "",
		component: MainComponent,
		children: [
			{
				path: "",
				component: HomeComponent,
			},
			{
				path: "home",
				component: HomeComponent,
				data: { title: "Home" },
			},
			{
				path: "about-us",
				component: AboutUsComponent,
				data: { title: "Who We Are" },
			},
			{
				path: "about-us/governance",
				component: GovernanceComponent,
				data: { title: "Governance" },
			},
			{
				path: "about-us/secretariat",
				component: SecretariatComponent,
				data: { title: "NAB Secretariat" },
			},
			{
				path: "about-us/impact-investing",
				component: ImpactInvestingComponent,
				data: { title: "Impact Investing" },
			},
			{
				path: "media/news",
				component: BlogsComponent,
				data: { title: "News" },
			},
			{
				path: "media/news/detail/:id",
				component: BlogComponent,
				data: { title: "News" },
			},
			{
				path: "strategic-pillars",
				component: PillarsComponent,
				data: { title: "Strategic Pillars" },
			},
			{
				path: "strategic-pillars/:id",
				component: PillarComponent,
				data: { title: "Strategic Pillar" },
			},
			{
				path: "contact-us",
				component: ContactUsComponent,
				data: { title: "Contact Us" },
			},
			{
				path: "membership",
				component: MembershipComponent,
				data: { title: "Membership" },
			},
		],
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true, anchorScrolling: "enabled" }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
