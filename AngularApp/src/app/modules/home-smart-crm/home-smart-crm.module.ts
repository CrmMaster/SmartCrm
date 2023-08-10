import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeSmartCrmRoutingModule } from './home-smart-crm-routing.module';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { HomeIndexComponent } from './home-index/home-index.component';
import { ResumeWorkHomeComponent } from './resume-work-home/resume-work-home.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ManagementHomeComponent } from './management-home/management-home.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CollaborativeHomeComponent } from './collaborative-home/collaborative-home.component';
import { ConversationHomeComponent } from './conversation-home/conversation-home.component';
import { ContentsStrategiesHomeComponent } from './contents-strategies-home/contents-strategies-home.component';
import { PricePlansHomeComponent } from './price-plans-home/price-plans-home.component';
import { FeedbackUsersHomeComponent } from './feedback-users-home/feedback-users-home.component';
import { GraphicHomeComponent } from './graphic-home/graphic-home.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';

@NgModule({
  declarations: [
    HeaderHomeComponent,
    HomeIndexComponent,
    ResumeWorkHomeComponent,
    ProductsHomeComponent,
    ManagementHomeComponent,
    CustomerHomeComponent,
    CollaborativeHomeComponent,
    ConversationHomeComponent,
    ContentsStrategiesHomeComponent,
    PricePlansHomeComponent,
    FeedbackUsersHomeComponent,
    GraphicHomeComponent,
    FooterHomeComponent
  ],
  imports: [HomeSmartCrmRoutingModule, CommonModule, HomeSmartCrmRoutingModule],
})
export class HomeSmartCrmModule {}
