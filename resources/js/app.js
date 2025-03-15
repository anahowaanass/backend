import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'app_key',
  wsHost: window.location.hostname,
  wsPort: 6001,
  forceTLS: false,
  encrypted: true,
  enabledTransports: ['ws', 'wss'],
});
