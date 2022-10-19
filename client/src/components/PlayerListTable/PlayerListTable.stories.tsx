import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlayersListTable from "./PlayerListTable";
import { GET_PLAYERS } from "../../hooks/usePlayers";

const playersListRes = [
  {
    "sofifa_id":158023,
    "short_name":"L. Messi",
    "player_positions":"RW, ST, CF",
    "age":33,
    "overall":93,
    "potential":93,
    "clubs":{
      "ID":241,
      "Name":"FC Barcelona",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":20801,
    "short_name":"Cristiano Ronaldo",
    "player_positions":"ST, LW",
    "age":35,
    "overall":92,
    "potential":92,
    "clubs":{
      "ID":45,
      "Name":"Juventus",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":200389,
    "short_name":"J. Oblak",
    "player_positions":"GK",
    "age":27,
    "overall":91,
    "potential":93,
    "clubs":{
      "ID":240,
      "Name":"Atlético Madrid",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":188545,
    "short_name":"R. Lewandowski",
    "player_positions":"ST",
    "age":31,
    "overall":91,
    "potential":91,
    "clubs":{
      "ID":21,
      "Name":"FC Bayern München",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":190871,
    "short_name":"Neymar Jr",
    "player_positions":"LW, CAM",
    "age":28,
    "overall":91,
    "potential":91,
    "clubs":{
      "ID":73,
      "Name":"Paris Saint-Germain",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":192985,
    "short_name":"K. De Bruyne",
    "player_positions":"CAM, CM",
    "age":29,
    "overall":91,
    "potential":91,
    "clubs":{
      "ID":10,
      "Name":"Manchester City",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":231747,
    "short_name":"K. Mbappé",
    "player_positions":"ST, LW, RW",
    "age":21,
    "overall":90,
    "potential":95,
    "clubs":{
      "ID":73,
      "Name":"Paris Saint-Germain",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":192448,
    "short_name":"M. ter Stegen",
    "player_positions":"GK",
    "age":28,
    "overall":90,
    "potential":93,
    "clubs":{
      "ID":241,
      "Name":"FC Barcelona",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":203376,
    "short_name":"V. van Dijk",
    "player_positions":"CB",
    "age":28,
    "overall":90,
    "potential":91,
    "clubs":{
      "ID":9,
      "Name":"Liverpool",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":212831,
    "short_name":"Alisson",
    "player_positions":"GK",
    "age":27,
    "overall":90,
    "potential":91,
    "clubs":{
      "ID":9,
      "Name":"Liverpool",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":208722,
    "short_name":"S. Mané",
    "player_positions":"LW",
    "age":28,
    "overall":90,
    "potential":90,
    "clubs":{
      "ID":9,
      "Name":"Liverpool",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":209331,
    "short_name":"M. Salah",
    "player_positions":"RW",
    "age":28,
    "overall":90,
    "potential":90,
    "clubs":{
      "ID":9,
      "Name":"Liverpool",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":192119,
    "short_name":"T. Courtois",
    "player_positions":"GK",
    "age":28,
    "overall":89,
    "potential":90,
    "clubs":{
      "ID":243,
      "Name":"Real Madrid",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":153079,
    "short_name":"S. Agüero",
    "player_positions":"ST",
    "age":32,
    "overall":89,
    "potential":89,
    "clubs":{
      "ID":10,
      "Name":"Manchester City",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":155862,
    "short_name":"Sergio Ramos",
    "player_positions":"CB",
    "age":34,
    "overall":89,
    "potential":89,
    "clubs":{
      "ID":243,
      "Name":"Real Madrid",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":165153,
    "short_name":"K. Benzema",
    "player_positions":"CF, ST",
    "age":32,
    "overall":89,
    "potential":89,
    "clubs":{
      "ID":243,
      "Name":"Real Madrid",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":167495,
    "short_name":"M. Neuer",
    "player_positions":"GK",
    "age":34,
    "overall":89,
    "potential":89,
    "clubs":{
      "ID":21,
      "Name":"FC Bayern München",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":200145,
    "short_name":"Casemiro",
    "player_positions":"CDM",
    "age":28,
    "overall":89,
    "potential":89,
    "clubs":{
      "ID":243,
      "Name":"Real Madrid",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":210257,
    "short_name":"Ederson",
    "player_positions":"GK",
    "age":26,
    "overall":88,
    "potential":91,
    "clubs":{
      "ID":10,
      "Name":"Manchester City",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":202652,
    "short_name":"R. Sterling",
    "player_positions":"LW, RW",
    "age":25,
    "overall":88,
    "potential":90,
    "clubs":{
      "ID":10,
      "Name":"Manchester City",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":212622,
    "short_name":"J. Kimmich",
    "player_positions":"CDM, RB",
    "age":25,
    "overall":88,
    "potential":90,
    "clubs":{
      "ID":21,
      "Name":"FC Bayern München",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":202126,
    "short_name":"H. Kane",
    "player_positions":"ST",
    "age":26,
    "overall":88,
    "potential":89,
    "clubs":{
      "ID":18,
      "Name":"Tottenham Hotspur",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":211110,
    "short_name":"P. Dybala",
    "player_positions":"CF, CAM",
    "age":26,
    "overall":88,
    "potential":89,
    "clubs":{
      "ID":45,
      "Name":"Juventus",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":162835,
    "short_name":"S. Handanovič",
    "player_positions":"GK",
    "age":35,
    "overall":88,
    "potential":88,
    "clubs":{
      "ID":44,
      "Name":"Inter",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":182521,
    "short_name":"T. Kroos",
    "player_positions":"CM",
    "age":30,
    "overall":88,
    "potential":88,
    "clubs":{
      "ID":243,
      "Name":"Real Madrid",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":183277,
    "short_name":"E. Hazard",
    "player_positions":"LW, ST",
    "age":29,
    "overall":88,
    "potential":88,
    "clubs":{
      "ID":243,
      "Name":"Real Madrid",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":201024,
    "short_name":"K. Koulibaly",
    "player_positions":"CB",
    "age":29,
    "overall":88,
    "potential":88,
    "clubs":{
      "ID":48,
      "Name":"Napoli",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":215914,
    "short_name":"N. Kanté",
    "player_positions":"CDM, CM",
    "age":29,
    "overall":88,
    "potential":88,
    "clubs":{
      "ID":5,
      "Name":"Chelsea",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":233049,
    "short_name":"J. Sancho",
    "player_positions":"RM, LM, CAM",
    "age":20,
    "overall":87,
    "potential":93,
    "clubs":{
      "ID":22,
      "Name":"Borussia Dortmund",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":231281,
    "short_name":"T. Alexander-Arnold",
    "player_positions":"RB",
    "age":21,
    "overall":87,
    "potential":92,
    "clubs":{
      "ID":9,
      "Name":"Liverpool",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":212198,
    "short_name":"Bruno Fernandes",
    "player_positions":"CAM, CM",
    "age":25,
    "overall":87,
    "potential":90,
    "clubs":{
      "ID":11,
      "Name":"Manchester United",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":212218,
    "short_name":"A. Laporte",
    "player_positions":"CB",
    "age":26,
    "overall":87,
    "potential":90,
    "clubs":{
      "ID":10,
      "Name":"Manchester City",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":209499,
    "short_name":"Fabinho",
    "player_positions":"CDM",
    "age":26,
    "overall":87,
    "potential":89,
    "clubs":{
      "ID":9,
      "Name":"Liverpool",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":216267,
    "short_name":"A. Robertson",
    "player_positions":"LB",
    "age":26,
    "overall":87,
    "potential":89,
    "clubs":{
      "ID":9,
      "Name":"Liverpool",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":218667,
    "short_name":"Bernardo Silva",
    "player_positions":"RW, CAM, CM",
    "age":25,
    "overall":87,
    "potential":88,
    "clubs":{
      "ID":10,
      "Name":"Manchester City",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":138956,
    "short_name":"G. Chiellini",
    "player_positions":"CB",
    "age":35,
    "overall":87,
    "potential":87,
    "clubs":{
      "ID":45,
      "Name":"Juventus",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":167948,
    "short_name":"H. Lloris",
    "player_positions":"GK",
    "age":33,
    "overall":87,
    "potential":87,
    "clubs":{
      "ID":18,
      "Name":"Tottenham Hotspur",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":225591,
    "short_name":"L. Suárez",
    "player_positions":"RM, ST",
    "age":24,
    "overall":73,
    "potential":79,
    "clubs":{
      "ID":1879,
      "Name":"Club América",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":177003,
    "short_name":"L. Modrić",
    "player_positions":"CM",
    "age":34,
    "overall":87,
    "potential":87,
    "clubs":{
      "ID":243,
      "Name":"Real Madrid",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":183898,
    "short_name":"A. Di María",
    "player_positions":"RW, LW",
    "age":32,
    "overall":87,
    "potential":87,
    "clubs":{
      "ID":73,
      "Name":"Paris Saint-Germain",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":186153,
    "short_name":"W. Szczęsny",
    "player_positions":"GK",
    "age":30,
    "overall":87,
    "potential":87,
    "clubs":{
      "ID":45,
      "Name":"Juventus",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":188567,
    "short_name":"P. Aubameyang",
    "player_positions":"ST, LW",
    "age":31,
    "overall":87,
    "potential":87,
    "clubs":{
      "ID":1,
      "Name":"Arsenal",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":189511,
    "short_name":"Sergio Busquets",
    "player_positions":"CDM",
    "age":31,
    "overall":87,
    "potential":87,
    "clubs":{
      "ID":241,
      "Name":"FC Barcelona",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":192387,
    "short_name":"C. Immobile",
    "player_positions":"ST",
    "age":30,
    "overall":87,
    "potential":87,
    "clubs":{
      "ID":46,
      "Name":"Lazio",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":193041,
    "short_name":"K. Navas",
    "player_positions":"GK",
    "age":33,
    "overall":87,
    "potential":87,
    "clubs":{
      "ID":73,
      "Name":"Paris Saint-Germain",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":194765,
    "short_name":"A. Griezmann",
    "player_positions":"ST, CF, LW",
    "age":29,
    "overall":87,
    "potential":87,
    "clubs":{
      "ID":241,
      "Name":"FC Barcelona",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":200104,
    "short_name":"H. Son",
    "player_positions":"LM, CF",
    "age":27,
    "overall":87,
    "potential":87,
    "clubs":{
      "ID":18,
      "Name":"Tottenham Hotspur",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":201942,
    "short_name":"Roberto Firmino",
    "player_positions":"CF",
    "age":28,
    "overall":87,
    "potential":87,
    "clubs":{
      "ID":9,
      "Name":"Liverpool",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":201535,
    "short_name":"R. Varane",
    "player_positions":"CB",
    "age":27,
    "overall":86,
    "potential":88,
    "clubs":{
      "ID":243,
      "Name":"Real Madrid",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":195864,
    "short_name":"P. Pogba",
    "player_positions":"CM, CDM",
    "age":27,
    "overall":86,
    "potential":87,
    "clubs":{
      "ID":11,
      "Name":"Manchester United",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":199556,
    "short_name":"M. Verratti",
    "player_positions":"CM, CDM",
    "age":27,
    "overall":86,
    "potential":87,
    "clubs":{
      "ID":73,
      "Name":"Paris Saint-Germain",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":255482,
    "short_name":"A. Gómez",
    "player_positions":"CB",
    "age":23,
    "overall":60,
    "potential":65,
    "clubs":{
      "ID":1898,
      "Name":"Boavista FC",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":152729,
    "short_name":"Piqué",
    "player_positions":"CB",
    "age":33,
    "overall":86,
    "potential":86,
    "clubs":{
      "ID":241,
      "Name":"FC Barcelona",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":168542,
    "short_name":"David Silva",
    "player_positions":"CAM, CM",
    "age":34,
    "overall":86,
    "potential":86,
    "clubs":{
      "ID":457,
      "Name":"Real Sociedad",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":177683,
    "short_name":"Y. Sommer",
    "player_positions":"GK",
    "age":31,
    "overall":86,
    "potential":86,
    "clubs":{
      "ID":23,
      "Name":"Borussia Mönchengladbach",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":178603,
    "short_name":"M. Hummels",
    "player_positions":"CB",
    "age":31,
    "overall":86,
    "potential":86,
    "clubs":{
      "ID":22,
      "Name":"Borussia Dortmund",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":183711,
    "short_name":"J. Henderson",
    "player_positions":"CDM, CM",
    "age":30,
    "overall":86,
    "potential":86,
    "clubs":{
      "ID":9,
      "Name":"Liverpool",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":189332,
    "short_name":"Jordi Alba",
    "player_positions":"LB",
    "age":31,
    "overall":86,
    "potential":86,
    "clubs":{
      "ID":241,
      "Name":"FC Barcelona",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":238734,
    "short_name":"T. Müller",
    "player_positions":"GK",
    "age":22,
    "overall":63,
    "potential":73,
    "clubs":{
      "ID":110482,
      "Name":"Hallescher FC",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":193080,
    "short_name":"De Gea",
    "player_positions":"GK",
    "age":29,
    "overall":86,
    "potential":86,
    "clubs":{
      "ID":11,
      "Name":"Manchester United",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":204963,
    "short_name":"Carvajal",
    "player_positions":"RB",
    "age":28,
    "overall":86,
    "potential":86,
    "clubs":{
      "ID":243,
      "Name":"Real Madrid",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":208830,
    "short_name":"J. Vardy",
    "player_positions":"ST",
    "age":33,
    "overall":86,
    "potential":86,
    "clubs":{
      "ID":95,
      "Name":"Leicester City",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":235790,
    "short_name":"K. Havertz",
    "player_positions":"CAM, RM, CF",
    "age":21,
    "overall":85,
    "potential":93,
    "clubs":{
      "ID":5,
      "Name":"Chelsea",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":230621,
    "short_name":"G. Donnarumma",
    "player_positions":"GK",
    "age":21,
    "overall":85,
    "potential":92,
    "clubs":{
      "ID":47,
      "Name":"Milan",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":235243,
    "short_name":"M. de Ligt",
    "player_positions":"CB",
    "age":20,
    "overall":85,
    "potential":92,
    "clubs":{
      "ID":45,
      "Name":"Juventus",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":231677,
    "short_name":"M. Rashford",
    "player_positions":"LM, ST",
    "age":22,
    "overall":85,
    "potential":91,
    "clubs":{
      "ID":11,
      "Name":"Manchester United",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":222492,
    "short_name":"L. Sané",
    "player_positions":"LM",
    "age":24,
    "overall":85,
    "potential":90,
    "clubs":{
      "ID":21,
      "Name":"FC Bayern München",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":228702,
    "short_name":"F. de Jong",
    "player_positions":"CM",
    "age":23,
    "overall":85,
    "potential":90,
    "clubs":{
      "ID":241,
      "Name":"FC Barcelona",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":207865,
    "short_name":"Marquinhos",
    "player_positions":"CB, CDM",
    "age":26,
    "overall":85,
    "potential":89,
    "clubs":{
      "ID":73,
      "Name":"Paris Saint-Germain",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":220440,
    "short_name":"C. Lenglet",
    "player_positions":"CB",
    "age":25,
    "overall":85,
    "potential":89,
    "clubs":{
      "ID":241,
      "Name":"FC Barcelona",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":223848,
    "short_name":"S. Milinković-Savić",
    "player_positions":"CM, CDM, CAM",
    "age":25,
    "overall":85,
    "potential":89,
    "clubs":{
      "ID":46,
      "Name":"Lazio",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":232363,
    "short_name":"M. Škriniar",
    "player_positions":"CB",
    "age":25,
    "overall":85,
    "potential":89,
    "clubs":{
      "ID":44,
      "Name":"Inter",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":202556,
    "short_name":"M. Depay",
    "player_positions":"CF, LW, CAM",
    "age":26,
    "overall":85,
    "potential":88,
    "clubs":{
      "ID":66,
      "Name":"Olympique Lyonnais",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":212188,
    "short_name":"T. Werner",
    "player_positions":"ST",
    "age":24,
    "overall":85,
    "potential":88,
    "clubs":{
      "ID":5,
      "Name":"Chelsea",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":198631,
    "short_name":"Rodri",
    "player_positions":"ST",
    "age":30,
    "overall":68,
    "potential":68,
    "clubs":{
      "ID":110827,
      "Name":"Real Oviedo",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":192563,
    "short_name":"B. Leno",
    "player_positions":"GK",
    "age":28,
    "overall":85,
    "potential":87,
    "clubs":{
      "ID":1,
      "Name":"Arsenal",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":206113,
    "short_name":"S. Gnabry",
    "player_positions":"RM, LM, RW",
    "age":24,
    "overall":85,
    "potential":87,
    "clubs":{
      "ID":21,
      "Name":"FC Bayern München",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":210243,
    "short_name":"Ricardo Pereira",
    "player_positions":"RB",
    "age":26,
    "overall":85,
    "potential":87,
    "clubs":{
      "ID":95,
      "Name":"Leicester City",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":192505,
    "short_name":"R. Lukaku",
    "player_positions":"ST",
    "age":27,
    "overall":85,
    "potential":86,
    "clubs":{
      "ID":44,
      "Name":"Inter",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":198706,
    "short_name":"Luis Alberto",
    "player_positions":"CAM, CM, CF",
    "age":27,
    "overall":85,
    "potential":86,
    "clubs":{
      "ID":46,
      "Name":"Lazio",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":201399,
    "short_name":"M. Icardi",
    "player_positions":"ST",
    "age":27,
    "overall":85,
    "potential":86,
    "clubs":{
      "ID":73,
      "Name":"Paris Saint-Germain",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":208670,
    "short_name":"H. Ziyech",
    "player_positions":"CAM, RW",
    "age":27,
    "overall":85,
    "potential":86,
    "clubs":{
      "ID":5,
      "Name":"Chelsea",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":164240,
    "short_name":"Thiago Silva",
    "player_positions":"CB",
    "age":35,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":5,
      "Name":"Chelsea",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":175943,
    "short_name":"D. Mertens",
    "player_positions":"CF, ST",
    "age":33,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":48,
      "Name":"Napoli",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":180206,
    "short_name":"M. Pjanić",
    "player_positions":"CM, CDM",
    "age":30,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":241,
      "Name":"FC Barcelona",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":181291,
    "short_name":"G. Wijnaldum",
    "player_positions":"CM",
    "age":29,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":9,
      "Name":"Liverpool",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":182493,
    "short_name":"D. Godín",
    "player_positions":"CB",
    "age":34,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":44,
      "Name":"Inter",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":184087,
    "short_name":"T. Alderweireld",
    "player_positions":"CB",
    "age":31,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":18,
      "Name":"Tottenham Hotspur",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":184344,
    "short_name":"L. Bonucci",
    "player_positions":"CB",
    "age":33,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":45,
      "Name":"Juventus",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":185122,
    "short_name":"P. Gulácsi",
    "player_positions":"GK",
    "age":30,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":112172,
      "Name":"RB Leipzig",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":188350,
    "short_name":"M. Reus",
    "player_positions":"CAM, CF",
    "age":31,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":22,
      "Name":"Borussia Dortmund",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":183885,
    "short_name":"K. Walker",
    "player_positions":"CM",
    "age":30,
    "overall":64,
    "potential":64,
    "clubs":{
      "ID":710,
      "Name":"Djurgårdens IF",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":255716,
    "short_name":"Thiago",
    "player_positions":"LM, CDM",
    "age":23,
    "overall":61,
    "potential":70,
    "clubs":{
      "ID":110747,
      "Name":"Cracovia",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":189513,
    "short_name":"Parejo",
    "player_positions":"CM",
    "age":31,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":483,
      "Name":"Villarreal CF",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":190460,
    "short_name":"C. Eriksen",
    "player_positions":"CAM, CM, RM",
    "age":28,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":44,
      "Name":"Inter",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":191043,
    "short_name":"Alex Sandro",
    "player_positions":"LB, LM",
    "age":29,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":45,
      "Name":"Juventus",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":193747,
    "short_name":"Koke",
    "player_positions":"CM, RM, LM",
    "age":28,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":240,
      "Name":"Atlético Madrid",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":198219,
    "short_name":"L. Insigne",
    "player_positions":"LW, CF",
    "age":29,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":48,
      "Name":"Napoli",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":204485,
    "short_name":"R. Mahrez",
    "player_positions":"RW, RM",
    "age":29,
    "overall":85,
    "potential":85,
    "clubs":{
      "ID":10,
      "Name":"Manchester City",
      "__typename":"clubs"
    },
    "__typename":"players"
  },
  {
    "sofifa_id":239085,
    "short_name":"E. Haaland",
    "player_positions":"ST",
    "age":19,
    "overall":84,
    "potential":92,
    "clubs":{
      "ID":22,
      "Name":"Borussia Dortmund",
      "__typename":"clubs"
    },
    "__typename":"players"
  }
];

export default {
  title: 'PlayerListTable',
  component: PlayersListTable,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PlayersListTable>;

const Template: ComponentStory<typeof PlayersListTable> = () => <PlayersListTable />

export const Default = Template.bind({});
Default.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GET_PLAYERS,
        },
        result: {
          data: {
            players: playersListRes
          },
        },
      },
    ],
  },
};
