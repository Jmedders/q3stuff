function redditController($scope){
  $scope.post = [
    {
      id: 0,
      title: 'St. Mary Lake',
      information: "St. Mary Lake in Glacier National Park, Montana. It's beautiful, you should visit.",
      pic: "http://cdn.allglacier.com/images/content/4667_4807_St_Mary_Lake_Glacier_National_Park_md.jpg",
      author: "That one guy",
      count: -2,
      date: new Date(),
      comments: [
        {
          author: "Ivan",
          comment: "It looks clean enough for me"
        },
        {
          author: "Andrei",
          comment: "Glaciers, bears, huckleberries"
        }
      ]
    },
    {
      id: 1,
      title: 'Santa Cruz Island',
      information: "Santa Cruz Island is a part of the Channel Islands National Park off the coast of California. Camping is allowed on the island, and you may see several species endemic to the Channel Islands, such as the Island Fox.",
      pic: "https://www.nps.gov/chis/planyourvisit/images/960-0M9B2301_1.jpg",
      author: "That other guy",
      count: 1,
      date: new Date(),
      comments: [{
        author: 'Miguel',
        comment: 'A nice escape from all the mainland. You can see milky way easily at night.'
      }]
    },
    {
      id: 2,
      title: "Lake Baikal",
      information: "The world's deepest freshwater lake (5,400ft). The lake contains approximately a fifth of the world's unfrozen freshwater supply and is home to the world's only true freshwater seal species.",
      pic: "http://billpfeiffer.org/wp-content/uploads/2013/12/Bankoboev.Ru_prozrachnaya_glad_na_ozero_baikal.jpg",
      author: "The russian",
      count: 3,
      date: new Date(),
      comments: [{
        author: 'Volodya',
        comment: 'krasivoye ozero'
      }]
    }
  ]

  $scope.idcount = 4;
  $scope.isTrue = false;
  $scope.showComment = false;
  $scope.showCommentForm = false;

  $scope.addComment = function(pushStuff, id){
    $scope.post[id].comments.push(pushStuff)
  };

  $scope.addPost = function(){
    $scope.newpost.id = $scope.idcount;
    $scope.newpost.count = 0;
    $scope.newpost.date = new Date();
    $scope.post.push($scope.newpost);
    $scope.idcount = $scope.idcount + 1;
  };

  $scope.clear = function(){
    $scope.newpost = null;
  };

  $scope.clearComment = function(){
    $scope.newcomment = null;
  };
}
app.controller("redditController", redditController)
