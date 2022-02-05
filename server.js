// require node modules
const express = require('express');//make the 'express app'
const controllers = require('./controllers/index.js') //access my controllers index
const dbConnections = require('./config/db.connection.js');
const models = require('./models/artwork_model.js'); //always acces to the model but why do I need this in here
// const models_artwork = require('./models/artwork_model.js');
const methodOverride = require('method-override');//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.   
const app = express();
const router = express.Router();

const PORT = 1000;


// ---import models---
// const artist =require ('./models')
// server.listen() method creates a listener on the specified 'port' or path.
// app.listen(PORT, () => console.log(`port is working ${PORT}`));

// Set our app-my app was working before I brought
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use("/artwork",controllers.Artwork)
app.listen(PORT, () => console.log(`port is working ${PORT}`));
// Configure the app (app.set)
// module.exports = new Collection(Artist, [
//     {
//         name: 'EiskalterEngel18',
//         medium: 'Digital Art',
//         pieces: ["Van", "The ice Breaker","Liquor Store","Modern Japan" ],
//         images: [
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dey5x2f-172149ca-6b99-4bf8-a922-643cdf87019f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNDcxOTRjLTQzODktNDBiMi1iMTMwLWUzZGU3NmRiNGVhMFwvZGV5NXgyZi0xNzIxNDljYS02Yjk5LTRiZjgtYTkyMi02NDNjZGY4NzAxOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Mg1JKRbvqvNGhS6YhkIBt6dgnauXKKgnEtfBy3v79aI",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dey2k46-8d66b2bb-6747-436c-b52c-8961a8106e8d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNDcxOTRjLTQzODktNDBiMi1iMTMwLWUzZGU3NmRiNGVhMFwvZGV5Mms0Ni04ZDY2YjJiYi02NzQ3LTQzNmMtYjUyYy04OTYxYTgxMDZlOGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UsIalYQ3nLFC9_50VXRH2JTZzb4CD_jJjbDuvN98TJc",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/derco66-fe67779c-9587-4cfd-8dd3-3da5140cc0ea.png/v1/fill/w_1280,h_816,q_80,strp/liquor_store_by_eiskalterengel18_derco66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE2IiwicGF0aCI6IlwvZlwvYmM0NzE5NGMtNDM4OS00MGIyLWIxMzAtZTNkZTc2ZGI0ZWEwXC9kZXJjbzY2LWZlNjc3NzljLTk1ODctNGNmZC04ZGQzLTNkYTUxNDBjYzBlYS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lPVi1z0rT8cyAUhbLsd8lcvFvgUKZTgtAFswiV9DQW8",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dekrk0v-4d65c814-c666-4629-ac31-5c56986a2e34.png/v1/fill/w_700,h_324,q_70,strp/modern_japan_by_eiskalterengel18_dekrk0v-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk0IiwicGF0aCI6IlwvZlwvYmM0NzE5NGMtNDM4OS00MGIyLWIxMzAtZTNkZTc2ZGI0ZWEwXC9kZWtyazB2LTRkNjVjODE0LWM2NjYtNDYyOS1hYzMxLTVjNTY5ODZhMmUzNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NWqFIckxgZ3H8BPHblF8LN_QLfAKewvcRKnuqPg7tUI"
//             ],
//         age: 30,
//         email: "12345@testemail.com",
//         numberOfPeices: 4,
//         },
//         {
//         name: 'SoftRider62',
//         medium: 'Digital Art',
//         pieces: ["Lost city", "Hollow mountains","Dark days","Stillness"],
//         images: [
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dey5x2f-172149ca-6b99-4bf8-a922-643cdf87019f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNDcxOTRjLTQzODktNDBiMi1iMTMwLWUzZGU3NmRiNGVhMFwvZGV5NXgyZi0xNzIxNDljYS02Yjk5LTRiZjgtYTkyMi02NDNjZGY4NzAxOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Mg1JKRbvqvNGhS6YhkIBt6dgnauXKKgnEtfBy3v79aI",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dey2k46-8d66b2bb-6747-436c-b52c-8961a8106e8d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNDcxOTRjLTQzODktNDBiMi1iMTMwLWUzZGU3NmRiNGVhMFwvZGV5Mms0Ni04ZDY2YjJiYi02NzQ3LTQzNmMtYjUyYy04OTYxYTgxMDZlOGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UsIalYQ3nLFC9_50VXRH2JTZzb4CD_jJjbDuvN98TJc",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/derco66-fe67779c-9587-4cfd-8dd3-3da5140cc0ea.png/v1/fill/w_1280,h_816,q_80,strp/liquor_store_by_eiskalterengel18_derco66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE2IiwicGF0aCI6IlwvZlwvYmM0NzE5NGMtNDM4OS00MGIyLWIxMzAtZTNkZTc2ZGI0ZWEwXC9kZXJjbzY2LWZlNjc3NzljLTk1ODctNGNmZC04ZGQzLTNkYTUxNDBjYzBlYS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lPVi1z0rT8cyAUhbLsd8lcvFvgUKZTgtAFswiV9DQW8",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dekrk0v-4d65c814-c666-4629-ac31-5c56986a2e34.png/v1/fill/w_700,h_324,q_70,strp/modern_japan_by_eiskalterengel18_dekrk0v-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk0IiwicGF0aCI6IlwvZlwvYmM0NzE5NGMtNDM4OS00MGIyLWIxMzAtZTNkZTc2ZGI0ZWEwXC9kZWtyazB2LTRkNjVjODE0LWM2NjYtNDYyOS1hYzMxLTVjNTY5ODZhMmUzNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NWqFIckxgZ3H8BPHblF8LN_QLfAKewvcRKnuqPg7tUI"
//             ],
//         age: 25,
//         email: "abcd@testemail.com",
//         numberOfPeices: 4,
//         },
//         name: 'Tullusion',
//         medium: 'Photography',
//         pieces: ["The Eye of the Demiurge", "Succession of Lights","What the Staroste Saw","In Autumn Forest"],
//         images: [
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23a31251-40d3-4f1d-ae07-e8cf68c84f6f/devs51f-18a0c6bf-8cbc-4d6a-aa3c-2d0c4600c532.jpg/v1/fill/w_1094,h_730,q_70,strp/the_eye_of_the_demiurge_by_tullusion_devs51f-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIzNSIsInBhdGgiOiJcL2ZcLzIzYTMxMjUxLTQwZDMtNGYxZC1hZTA3LWU4Y2Y2OGM4NGY2ZlwvZGV2czUxZi0xOGEwYzZiZi04Y2JjLTRkNmEtYWEzYy0yZDBjNDYwMGM1MzIuanBnIiwid2lkdGgiOiI8PTE4NTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.iIhBh6FAoNy_wXu0kSAeQTsATsdvlvZP-0s4yVnmEhE",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23a31251-40d3-4f1d-ae07-e8cf68c84f6f/denf2up-daadae16-15e2-46fa-883e-dd0648a92e5b.jpg/v1/fill/w_1094,h_730,q_70,strp/succession_of_lights_by_tullusion_denf2up-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIzNSIsInBhdGgiOiJcL2ZcLzIzYTMxMjUxLTQwZDMtNGYxZC1hZTA3LWU4Y2Y2OGM4NGY2ZlwvZGVuZjJ1cC1kYWFkYWUxNi0xNWUyLTQ2ZmEtODgzZS1kZDA2NDhhOTJlNWIuanBnIiwid2lkdGgiOiI8PTE4NTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ykeX3lGrilkYGqz6Nx2Y1s6FKL5DsZmx4vniuL5-PQs",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23a31251-40d3-4f1d-ae07-e8cf68c84f6f/devs5ue-5fa5b2b1-675a-47af-a52b-fd3ec1e949f0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzYTMxMjUxLTQwZDMtNGYxZC1hZTA3LWU4Y2Y2OGM4NGY2ZlwvZGV2czV1ZS01ZmE1YjJiMS02NzVhLTQ3YWYtYTUyYi1mZDNlYzFlOTQ5ZjAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JiRshsyHnoMCLHpWTr1JDJWvgUY6Z7Pusv_rHLY78dw",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23a31251-40d3-4f1d-ae07-e8cf68c84f6f/d5j4dfr-e718ae06-6997-4bd1-a74f-70029f5720f4.jpg/v1/fill/w_800,h_1067,q_75,strp/in_autumn_forest_by_tullusion_d5j4dfr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcLzIzYTMxMjUxLTQwZDMtNGYxZC1hZTA3LWU4Y2Y2OGM4NGY2ZlwvZDVqNGRmci1lNzE4YWUwNi02OTk3LTRiZDEtYTc0Zi03MDAyOWY1NzIwZjQuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3pCswWRC6PS9_BXA2ybzWwN-BVLuiFlSQcXWv5jcUoM"
//             ],
//         age: 25,
//         email: "5678@testemail.com",
//         numberOfPeices: 4,
//         },
//         ],
//         name: 'Some Stuff I Drew',
//         medium: 'Ink',
//         pieces: ["Lighthouse", "Panda","Snake","Octopus"],
//         images: [
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dey5x2f-172149ca-6b99-4bf8-a922-643cdf87019f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNDcxOTRjLTQzODktNDBiMi1iMTMwLWUzZGU3NmRiNGVhMFwvZGV5NXgyZi0xNzIxNDljYS02Yjk5LTRiZjgtYTkyMi02NDNjZGY4NzAxOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Mg1JKRbvqvNGhS6YhkIBt6dgnauXKKgnEtfBy3v79aI",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dey2k46-8d66b2bb-6747-436c-b52c-8961a8106e8d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNDcxOTRjLTQzODktNDBiMi1iMTMwLWUzZGU3NmRiNGVhMFwvZGV5Mms0Ni04ZDY2YjJiYi02NzQ3LTQzNmMtYjUyYy04OTYxYTgxMDZlOGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UsIalYQ3nLFC9_50VXRH2JTZzb4CD_jJjbDuvN98TJc",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/derco66-fe67779c-9587-4cfd-8dd3-3da5140cc0ea.png/v1/fill/w_1280,h_816,q_80,strp/liquor_store_by_eiskalterengel18_derco66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE2IiwicGF0aCI6IlwvZlwvYmM0NzE5NGMtNDM4OS00MGIyLWIxMzAtZTNkZTc2ZGI0ZWEwXC9kZXJjbzY2LWZlNjc3NzljLTk1ODctNGNmZC04ZGQzLTNkYTUxNDBjYzBlYS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lPVi1z0rT8cyAUhbLsd8lcvFvgUKZTgtAFswiV9DQW8",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dekrk0v-4d65c814-c666-4629-ac31-5c56986a2e34.png/v1/fill/w_700,h_324,q_70,strp/modern_japan_by_eiskalterengel18_dekrk0v-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk0IiwicGF0aCI6IlwvZlwvYmM0NzE5NGMtNDM4OS00MGIyLWIxMzAtZTNkZTc2ZGI0ZWEwXC9kZWtyazB2LTRkNjVjODE0LWM2NjYtNDYyOS1hYzMxLTVjNTY5ODZhMmUzNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NWqFIckxgZ3H8BPHblF8LN_QLfAKewvcRKnuqPg7tUI"
//             ],
//         age: 29,
//         email: "efg@testemail.com",
//         numberOfPeices: 4,
//         },
//         ]   
// )


// ---will automatically be stored in 'artist' collection. ----
// ---set Artist variable to = model , now i can seed my artist data and it will be formatted this way----
// const Artist = mongoose.model("Artist", artistSchema);
// ---export model---
// module.exports = Artist;
	

// Mount routes
// The get method defines a route that listens for a GET request
// app.get('/', function(req, res) {
//     res.render('home.ejs');
//   });
	

// home
app.get('/', function(req, res) {
    res.render('home.ejs');
  });
// //index art
app.get('/artwork', function(req, res) {
    res.render("art_index.ejs");
  });
//   //index artists
// app.get('/artists', function(req, res) {
//     res.render('artist_index.ejs');
//   //   show route single piece of art aftert artist page
// app.get('/artwork/:artworkId', function(req, res) {
//     res.send('<h1>all art Page</h1>');
//   });

//   });
// //single artists and info and link to his/her art index
// app.get('/artist/artistId', function(req, res) {
//     res.send('<h1>all artists Page</h1>');
//   });
// // category index
// app.get('/artwork/:categories', function(req, res) {
//     res.send('<h1>categoryPage</h1>');
//   });
// // categoryshow
// app.get('/artwork', function(req, res) {
//     res.send('<h1>indexPage</h1>');
//   });
// // artists
// app.get('/artists', function(req, res) {
//     res.send('<h1>all artist</h1>');
//   });
// // artisid
// app.get('/artistid', function(req, res) {
//     res.send('<h1>artistby id</h1>');
//   });
// // create form
// app.get('/new', function(req, res) {
//     res.render('new_art_form.ejs');
//   });
// // delete form
// app.get('/delete', function(req, res) {
//     res.send('<h1>deletePage</h1>');
//   });
// // sign up form
// app.get('/sign_up', function(req, res) {
//     res.send('<h1>sign upPage</h1>');
//   });
//   app.get('/*', function(req, res) {
//     res.redirect('/');
//   });



