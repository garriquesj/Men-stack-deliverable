
// // ODM stands for Object Document Model. 
// // It translates the “documents” being stored in Mongo into fancier JS objects,
// // that have more helpful methods and properties. 
// // The ODM that we will use with MongoDB is Mongoose.
// // ---require mongoose---
// const mongoose = require("mongoose")
// //mongoose.schema is a constructor function for building Schemas
// const Schema = mongoose.Schema; 
// // maybe because its a constant in my artwork 
// //  use 
// // 

// // Schema: A Schema is a diagram or blueprint for what every object in the noSQL database will contain.
// const artistSchema = new Schema({
//     name: {
//         type: String, required: true
//     }, 
//     // { type: String, required: true, unique: true }experment with later    
//     medium: {
//         type: String, required: true 
//     },
//     pieces: [{
//         String
//     }],
//     images: [{
//         String
//     }],
//     age: {
//         type: Date, required: true,min: '2002-01-1',//age minimum test
//     },
//     email: {
//         type: String, required: true, unique: true 
//     },
//     numberOfPeices: {
//         type: Number
//     }
// });

// // ---------fake db---------
// // module.exports = new Collection(Artist, [
// //     {
// //         name: 'EiskalterEngel18',
// //         medium: 'Digital Art',
// //         pieces: ["Van", "The ice Breaker","Liquor Store","Modern Japan" ],
// //         images: [
// //             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dey5x2f-172149ca-6b99-4bf8-a922-643cdf87019f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNDcxOTRjLTQzODktNDBiMi1iMTMwLWUzZGU3NmRiNGVhMFwvZGV5NXgyZi0xNzIxNDljYS02Yjk5LTRiZjgtYTkyMi02NDNjZGY4NzAxOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Mg1JKRbvqvNGhS6YhkIBt6dgnauXKKgnEtfBy3v79aI",
// //             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dey2k46-8d66b2bb-6747-436c-b52c-8961a8106e8d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNDcxOTRjLTQzODktNDBiMi1iMTMwLWUzZGU3NmRiNGVhMFwvZGV5Mms0Ni04ZDY2YjJiYi02NzQ3LTQzNmMtYjUyYy04OTYxYTgxMDZlOGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UsIalYQ3nLFC9_50VXRH2JTZzb4CD_jJjbDuvN98TJc",
// //             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/derco66-fe67779c-9587-4cfd-8dd3-3da5140cc0ea.png/v1/fill/w_1280,h_816,q_80,strp/liquor_store_by_eiskalterengel18_derco66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE2IiwicGF0aCI6IlwvZlwvYmM0NzE5NGMtNDM4OS00MGIyLWIxMzAtZTNkZTc2ZGI0ZWEwXC9kZXJjbzY2LWZlNjc3NzljLTk1ODctNGNmZC04ZGQzLTNkYTUxNDBjYzBlYS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lPVi1z0rT8cyAUhbLsd8lcvFvgUKZTgtAFswiV9DQW8",
// //             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dekrk0v-4d65c814-c666-4629-ac31-5c56986a2e34.png/v1/fill/w_700,h_324,q_70,strp/modern_japan_by_eiskalterengel18_dekrk0v-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk0IiwicGF0aCI6IlwvZlwvYmM0NzE5NGMtNDM4OS00MGIyLWIxMzAtZTNkZTc2ZGI0ZWEwXC9kZWtyazB2LTRkNjVjODE0LWM2NjYtNDYyOS1hYzMxLTVjNTY5ODZhMmUzNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NWqFIckxgZ3H8BPHblF8LN_QLfAKewvcRKnuqPg7tUI"
// //             ],
// //         age: 30,
// //         email: "12345@testemail.com",
// //         numberOfPeices: 4,
// //         },
// //         {
// //         name: 'SoftRider62',
// //         medium: 'Digital Art',
// //         pieces: ["View From Rooftop", "Island Of Giants","Wheels Of Asia","Stillness"],
// //         images: [
// //             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4e7a5a6-5bb9-4d74-badc-511a4a806c8a/deehi1p-bf2c949a-3845-42fe-9236-5e37d0938120.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0ZTdhNWE2LTViYjktNGQ3NC1iYWRjLTUxMWE0YTgwNmM4YVwvZGVlaGkxcC1iZjJjOTQ5YS0zODQ1LTQyZmUtOTIzNi01ZTM3ZDA5MzgxMjAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.F54nZH8tPUyeVs8WmWzGrH_ahzL7CtOPhgo-8y6OEdU",
// //             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4e7a5a6-5bb9-4d74-badc-511a4a806c8a/devl7d4-9446c6ea-9733-48f3-aa67-f6686ff87084.jpg/v1/fill/w_1920,h_1081,q_75,strp/island_of_giants_by_softyrider62_devl7d4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MSIsInBhdGgiOiJcL2ZcL2Y0ZTdhNWE2LTViYjktNGQ3NC1iYWRjLTUxMWE0YTgwNmM4YVwvZGV2bDdkNC05NDQ2YzZlYS05NzMzLTQ4ZjMtYWE2Ny1mNjY4NmZmODcwODQuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Wx9-Yue_moxzcA24H60syIdWyaKeYjgvgHJR2zYSHEs",
// //             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4e7a5a6-5bb9-4d74-badc-511a4a806c8a/dds8k5r-022dd1da-b721-41f7-9e06-4aa81cf1c9a9.jpg/v1/fill/w_1600,h_901,q_75,strp/wheels_of_asia_by_softyrider62_dds8k5r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAxIiwicGF0aCI6IlwvZlwvZjRlN2E1YTYtNWJiOS00ZDc0LWJhZGMtNTExYTRhODA2YzhhXC9kZHM4azVyLTAyMmRkMWRhLWI3MjEtNDFmNy05ZTA2LTRhYTgxY2YxYzlhOS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6mCo9113Tipeudo1rDEIca0-SN9C-zET3yBnchpKQus",
// //             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4e7a5a6-5bb9-4d74-badc-511a4a806c8a/deygrda-abb5f844-7c54-4730-9b83-037fa1131c44.jpg/v1/fill/w_1192,h_671,q_70,strp/stillness_by_softyrider62_deygrda-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MSIsInBhdGgiOiJcL2ZcL2Y0ZTdhNWE2LTViYjktNGQ3NC1iYWRjLTUxMWE0YTgwNmM4YVwvZGV5Z3JkYS1hYmI1Zjg0NC03YzU0LTQ3MzAtOWI4My0wMzdmYTExMzFjNDQuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4NOmqXEyNcL4ia44Zu8AwhFrX8gW7D1tww_7uy-cknA"
// //             ],
// //         age: 25,
// //         email: "abcd@testemail.com",
// //         numberOfPeices: 4,
// //         },
// //         {
// //         name: 'Tullusion',
// //         medium: 'Photography',
// //         pieces: ["The Eye of the Demiurge", "Succession of Lights","What the Staroste Saw","In Autumn Forest"],
// //         images: [
// //             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23a31251-40d3-4f1d-ae07-e8cf68c84f6f/devs51f-18a0c6bf-8cbc-4d6a-aa3c-2d0c4600c532.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzYTMxMjUxLTQwZDMtNGYxZC1hZTA3LWU4Y2Y2OGM4NGY2ZlwvZGV2czUxZi0xOGEwYzZiZi04Y2JjLTRkNmEtYWEzYy0yZDBjNDYwMGM1MzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JWZRFkykUTcdxvrrw-d00PhwR2qEMtM77-d-HXjDglc",
// //             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23a31251-40d3-4f1d-ae07-e8cf68c84f6f/denf2up-daadae16-15e2-46fa-883e-dd0648a92e5b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzYTMxMjUxLTQwZDMtNGYxZC1hZTA3LWU4Y2Y2OGM4NGY2ZlwvZGVuZjJ1cC1kYWFkYWUxNi0xNWUyLTQ2ZmEtODgzZS1kZDA2NDhhOTJlNWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lIXOQYdMdhlMRPUq2h-ztCT_Nm1i8G_vSWgkUpXmfOk",
// //             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23a31251-40d3-4f1d-ae07-e8cf68c84f6f/devs5ue-5fa5b2b1-675a-47af-a52b-fd3ec1e949f0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzYTMxMjUxLTQwZDMtNGYxZC1hZTA3LWU4Y2Y2OGM4NGY2ZlwvZGV2czV1ZS01ZmE1YjJiMS02NzVhLTQ3YWYtYTUyYi1mZDNlYzFlOTQ5ZjAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JiRshsyHnoMCLHpWTr1JDJWvgUY6Z7Pusv_rHLY78dw",
// //             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23a31251-40d3-4f1d-ae07-e8cf68c84f6f/d5j4dfr-e718ae06-6997-4bd1-a74f-70029f5720f4.jpg/v1/fill/w_800,h_1067,q_75,strp/in_autumn_forest_by_tullusion_d5j4dfr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcLzIzYTMxMjUxLTQwZDMtNGYxZC1hZTA3LWU4Y2Y2OGM4NGY2ZlwvZDVqNGRmci1lNzE4YWUwNi02OTk3LTRiZDEtYTc0Zi03MDAyOWY1NzIwZjQuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3pCswWRC6PS9_BXA2ybzWwN-BVLuiFlSQcXWv5jcUoM"
// //         ],
// //             age: 25,
// //         email: "5678@testemail.com",
// //         numberOfPeices: 4,
// //         },
// //         {
// //         name: 'Some Stuff I Drew',
// //         medium: 'Ink',
// //         pieces: ["Lighthouse", "Panda","Snake","Octopus"],
// //         images: [
// //            "https://i.imgur.com/vzcwkam.jpg",
// //            "https://i.imgur.com/qcDNyxk.jpg",
// //            "https://i.imgur.com/G124Hta.jpg",
// //            "https://i.imgur.com/oyC3QRo.jpg"
// //             ],
// //         age: 29,
// //         email: "efg@testemail.com",
// //         numberOfPeices: 4,
// //         }
// //         ]   
// // )
// // ---will automatically be stored in 'artist' collection. ----
// // ---set Artist variable to = model , now i can seed my artist data and it will be formatted this way----
// const Artist = mongoose.model("Artist", artistSchema);
// // ---export model---
// module.exports = Artist;