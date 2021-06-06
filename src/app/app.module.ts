import { MaterialModule } from './shared/config/material.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUsersComponent } from './pages/users/edit-users/edit-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPostsComponent } from './pages/posts/edit-posts/edit-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    UsersComponent,
    PostsComponent,
    PhotosComponent,
    EditUsersComponent,
    EditPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
