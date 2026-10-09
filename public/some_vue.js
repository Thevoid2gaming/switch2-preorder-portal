const { createApp, ref } = Vue

createApp({
   data() {
      return {
         gamesIndex: 0, // Index for the selected game
         games: [], // Array to store game data
         selectedIndices: [], // Stores the indices of selected games for the cart
         total: 0 // Total price of selected games
      }  
   }, 
   mounted() {}, 
   created() {
      console.log("created")
      fetch('http://localhost:3000/data/Switch2Games.json') // Fetches game data
         .then(response => response.json())
         .then(data => {
            console.log(data);
            this.games = data.games; 
         })
         .catch(function (error) {
            console.log(error); // Handles any errors in the fetch request
         })
   },	

   methods: {
      sort_games: function (event) {
         // Sort selected game indices and update the total price
         this.selectedIndices.sort(function (a, b) { return a - b });
         if(event.target.checked){
            this.total = this.total + this.games[this.gamesIndex].price; // Add price
         }else{
            this.total = this.total - this.total[this.gamesIndex].price; // Subtract price
         }
      },
   }
}).mount('#vue') // Mounts Vue app to the div with id 'vue'
