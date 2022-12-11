import Vue from 'vue';
import VueRouter from 'vue-router';
import ChatsView from '../views/Chats.vue';
import StatusesView from '../views/Statuses.vue';
import CallsView from '../views/Calls.vue';
import ContactsView from '../views/Contacts.vue';
import ChatView from '../views/Chat.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'mainPages',
    redirect: '/home/chats',
    children: [
      {
        path: 'chats',
        name: 'chats',
        component: ChatsView,
        children: [
          {
            path: ':id',
            name: 'chat',
            component: ChatView
          }  
        ]
      },
      {
        path: 'status',
        name: 'statuses',
        component: StatusesView
      },
      {
        path: 'calls',
        name: 'calls',
        component: CallsView
      }
    ]
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  }
];

const router = new VueRouter({ routes });

export default router;
