Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile || {};

  user.profile.points = [
    { category: "computer-science", points: 0 },
    { category: "film", points: 0 },
    { category: "general-knowledge", points: 0 },
    { category: "science-nature", points: 0 },
    { category: "all", points: 0 }
  ];

  user.profile.gamesPlayed = 0;

  // Returns the user object
  return user;
});
