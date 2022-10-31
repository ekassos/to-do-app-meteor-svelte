<script>
  import { Meteor } from 'meteor/meteor';

  let username = "";
  let password = "";

  const handleSubmit = () => {
    Meteor.loginWithPassword(username, password);
  }
</script>

<form class="login-form" on:submit|preventDefault={handleSubmit}>
    <h3>Use login details:<br>username: cs279<br>password: cs279</h3>
    <div>
        <label htmlFor="username">Username</label>

        <input
                type="text"
                placeholder="Username"
                name="username"
                required
                bind:value={username}
        />
    </div>

    <div>
        <label htmlFor="password">Password</label>

        <input
                type="password"
                placeholder="Password"
                name="password"
                required
                bind:value={password}
        />
    </div>
    <div>
        <button type="submit">Log In</button>
    </div>
</form>
