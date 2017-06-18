import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FacebookAuth, User} from '@ionic/cloud-angular';

import { DataService } from '../../providers/apiData.service';

import { LoginPage } from '../login/login';

import { AssociationModel, KnowledgeModel, ProfileModel } from '../../models/interfaces';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  userReady: boolean = false;
  selectedItem: any;
  userKey: any;
  public followings: Array<KnowledgeModel<ProfileModel, AssociationModel>> = [];
  public profile: KnowledgeModel<ProfileModel, AssociationModel>;

  host: string = "";

  constructor(public user: User,
              public facebookAuth: FacebookAuth,
              public navCtrl: NavController,
              public navParams:NavParams,
              public dataService:DataService) {
        this.selectedItem = navParams.get('item');
        this.userKey = navParams.get('key');
        //this.profile = this.user.details;
  }

  ngOnInit() {
    this.dataService.getOne<ProfileModel>([ this.userKey]).subscribe((data: KnowledgeModel<ProfileModel, AssociationModel>) => {
      this.profile = data;
    });
    this.dataService.getData<ProfileModel>(["subscribedBy", this.userKey],null).subscribe((data: KnowledgeModel<ProfileModel, AssociationModel>[]) => {
      for (let follow of data){
        this.followings.push(follow);
      }
    });
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  removeSelected(item: string) {
    //this.followingsService.remove(item);
  };

  doFbLogout(){
    this.facebookAuth.logout()
        .then(function(response) {
          //user logged out so we will remove him from the NativeStorage
          this.navCtrl.push(LoginPage);
        }, function(error){
          console.log(error);
        });
  }
}
