import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <h1>hello world!</h1>
    <% if (routing) {
     %><router-outlet></router-outlet><%
    } %>
  `,<% } else { %>
  templateUrl: './app.component.html',<% } if(inlineStyle) { %>
  styles: []<% } else { %>
  styleUrls: ['./app.component.<%= styleext %>']<% } %>
})
export class AppComponent {
}
