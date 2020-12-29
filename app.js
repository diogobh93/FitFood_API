const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

// Lista de valores nutricionais
const listFoods = [
  {
    alimento: "Arroz integral cozido",
    calorias: "124",
    proteina: "2,6",
    colesterol: "NA",
    carboidrato: "25,8",
    fibra: "2,7"
  },
  {
    alimento: "Arroz integral cru",
    calorias: "360",
    proteina: "7,3",
    colesterol: "NA",
    carboidrato: "77,5",
    fibra: "4,8"
  },
  {
    alimento: "Arroz tipo 1 cozido",
    calorias: "128",
    proteina: "2,5",
    colesterol: "NA",
    carboidrato: "28,1",
    fibra: "1,6"
  },
  {
    alimento: "Arroz tipo 1 cru",
    calorias: "358",
    proteina: "7,2",
    colesterol: "NA",
    carboidrato: "78,8",
    fibra: "1,6"
  },
  {
    alimento: "Arroz tipo 2 cozido",
    calorias: "130",
    proteina: "2,6",
    colesterol: "NA",
    carboidrato: "28,2",
    fibra: "1,1"
  },
  {
    alimento: "Arroz tipo 2 cru",
    calorias: "358",
    proteina: "7,2",
    colesterol: "NA",
    carboidrato: "78,9",
    fibra: "1,7"
  },
  {
    alimento: "Aveia flocos crua",
    calorias: "394",
    proteina: "13,9",
    colesterol: "NA",
    carboidrato: "66,6",
    fibra: "9,1"
  },
  {
    alimento: "Biscoito doce maisena",
    calorias: "443",
    proteina: "8,1",
    colesterol: "NA",
    carboidrato: "75,2",
    fibra: "2,1"
  },
  {
    alimento: "Biscoito doce recheado com chocolate",
    calorias: "472",
    proteina: "6,4",
    colesterol: "Tr",
    carboidrato: "70,5",
    fibra: "3,0"
  },
  {
    alimento: "Biscoito doce recheado com morango",
    calorias: "471",
    proteina: "5,7",
    colesterol: "Tr",
    carboidrato: "71,0",
    fibra: "1,5"
  },
  {
    alimento: "Biscoito doce wafer recheado de chocolate",
    calorias: "502",
    proteina: "5,6",
    colesterol: "Tr",
    carboidrato: "67,5",
    fibra: "1,8"
  },
  {
    alimento: "Biscoito doce wafer recheado de morango",
    calorias: "513",
    proteina: "4,5",
    colesterol: "1",
    carboidrato: "67,4",
    fibra: "0,8"
  },
  {
    alimento: "Biscoito salgado cream cracker",
    calorias: "432",
    proteina: "10,1",
    colesterol: "NA",
    carboidrato: "68,7",
    fibra: "2,5"
  },
  {
    alimento: "Bolo mistura para",
    calorias: "419",
    proteina: "6,2",
    colesterol: "Tr",
    carboidrato: "84,7",
    fibra: "1,7"
  },
  {
    alimento: "Bolo pronto aipim",
    calorias: "324",
    proteina: "4,4",
    colesterol: "73",
    carboidrato: "47,9",
    fibra: "0,7"
  },
  {
    alimento: "Bolo pronto chocolate",
    calorias: "410",
    proteina: "6,2",
    colesterol: "77",
    carboidrato: "54,7",
    fibra: "1,4"
  },
  {
    alimento: "Bolo pronto coco",
    calorias: "333",
    proteina: "5,7",
    colesterol: "63",
    carboidrato: "52,3",
    fibra: "1,1"
  },
  {
    alimento: "Bolo pronto milho",
    calorias: "311",
    proteina: "4,8",
    colesterol: "82",
    carboidrato: "45,1",
    fibra: "0,7"
  },
  {
    alimento: "Canjica branca crua",
    calorias: "358",
    proteina: "7,2",
    colesterol: "NA",
    carboidrato: "78,1",
    fibra: "5,5"
  },
  {
    alimento: "Canjica com leite integral",
    calorias: "112",
    proteina: "2,4",
    colesterol: "1",
    carboidrato: "23,6",
    fibra: "1,2"
  },
  {
    alimento: "Cereais milho flocos com sal",
    calorias: "370",
    proteina: "7,3",
    colesterol: "NA",
    carboidrato: "80,8",
    fibra: "5,3"
  },
  {
    alimento: "Cereais milho flocos sem sal",
    calorias: "363",
    proteina: "6,9",
    colesterol: "NA",
    carboidrato: "80,4",
    fibra: "1,8"
  },
  {
    alimento: "Cereais mingau milho infantil",
    calorias: "394",
    proteina: "6,4",
    colesterol: "NA",
    carboidrato: "87,3",
    fibra: "3,2"
  },
  {
    alimento: "Cereais mistura para vitamina trigo cevada e aveia",
    calorias: "381",
    proteina: "8,9",
    colesterol: "NA",
    carboidrato: "81,6",
    fibra: "5,0"
  },
  {
    alimento: "Cereal matinal milho",
    calorias: "365",
    proteina: "7,2",
    colesterol: "NA",
    carboidrato: "83,8",
    fibra: "4,1"
  },
  {
    alimento: "Cereal matinal milho açúcar",
    calorias: "377",
    proteina: "4,7",
    colesterol: "NA",
    carboidrato: "88,8",
    fibra: "2,1"
  },
  {
    alimento: "Creme de arroz pó",
    calorias: "386",
    proteina: "7,0",
    colesterol: "NA",
    carboidrato: "83,9",
    fibra: "1,1"
  },
  {
    alimento: "Creme de milho pó",
    calorias: "333",
    proteina: "4,8",
    colesterol: "NA",
    carboidrato: "86,1",
    fibra: "3,7"
  },
  {
    alimento: "Curau milho verde",
    calorias: "78",
    proteina: "2,4",
    colesterol: "5",
    carboidrato: "13,9",
    fibra: "0,5"
  },
  {
    alimento: "Curau milho verde mistura para",
    calorias: "402",
    proteina: "2,2",
    colesterol: "NA",
    carboidrato: "79,8",
    fibra: "2,5"
  },
  {
    alimento: "Farinha de arroz enriquecida",
    calorias: "363",
    proteina: "1,3",
    colesterol: "NA",
    carboidrato: "85,5",
    fibra: "0,6"
  },
  {
    alimento: "Farinha de centeio integral",
    calorias: "336",
    proteina: "12,5",
    colesterol: "NA",
    carboidrato: "73,3",
    fibra: "15,5"
  },
  {
    alimento: "Farinha de milho amarela",
    calorias: "351",
    proteina: "7,2",
    colesterol: "NA",
    carboidrato: "79,1",
    fibra: "5,5"
  },
  {
    alimento: "Farinha de rosca",
    calorias: "371",
    proteina: "11,4",
    colesterol: "NA",
    carboidrato: "75,8",
    fibra: "4,8"
  },
  {
    alimento: "Farinha de trigo",
    calorias: "360",
    proteina: "9,8",
    colesterol: "NA",
    carboidrato: "75,1",
    fibra: "2,3"
  },
  {
    alimento: "Farinha láctea de cereais",
    calorias: "415",
    proteina: "11,9",
    colesterol: "11",
    carboidrato: "77,8",
    fibra: "1,9"
  },
  {
    alimento: "Lasanha massa fresca cozida",
    calorias: "164",
    proteina: "5,8",
    colesterol: "NA",
    carboidrato: "32,5",
    fibra: "1,6"
  },
  {
    alimento: "Lasanha massa fresca crua",
    calorias: "220",
    proteina: "7,0",
    colesterol: "NA",
    carboidrato: "45,1",
    fibra: "1,6"
  },
  {
    alimento: "Macarrão instantâneo",
    calorias: "436",
    proteina: "8,8",
    colesterol: "NA",
    carboidrato: "62,4",
    fibra: "5,6"
  },
  {
    alimento: "Macarrão trigo cru",
    calorias: "371",
    proteina: "10,0",
    colesterol: "NA",
    carboidrato: "77,9",
    fibra: "2,9"
  },
  {
    alimento: "Macarrão trigo cru com ovos",
    calorias: "371",
    proteina: "10,3",
    colesterol: "18",
    carboidrato: "76,6",
    fibra: "2,3"
  },
  {
    alimento: "Milho amido cru",
    calorias: "361",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "87,1",
    fibra: "0,7"
  },
  {
    alimento: "Milho fubá cru",
    calorias: "353",
    proteina: "7,2",
    colesterol: "NA",
    carboidrato: "78,9",
    fibra: "4,7"
  },
  {
    alimento: "Milho verde cru",
    calorias: "138",
    proteina: "6,6",
    colesterol: "NA",
    carboidrato: "28,6",
    fibra: "3,9"
  },
  {
    alimento: "Milho verde enlatado drenado",
    calorias: "98",
    proteina: "3,2",
    colesterol: "NA",
    carboidrato: "17,1",
    fibra: "4,6"
  },
  {
    alimento: "Mingau tradicional pó",
    calorias: "373",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "89,3",
    fibra: "0,9"
  },
  {
    alimento: "Pamonha barra para cozimento pré-cozida",
    calorias: "171",
    proteina: "2,6",
    colesterol: "NA",
    carboidrato: "30,7",
    fibra: "2,4"
  },
  {
    alimento: "Pão aveia forma",
    calorias: "343",
    proteina: "12,4",
    colesterol: "Tr",
    carboidrato: "59,6",
    fibra: "6,0"
  },
  {
    alimento: "Pão de soja",
    calorias: "309",
    proteina: "11,3",
    colesterol: "NA",
    carboidrato: "56,5",
    fibra: "5,7"
  },
  {
    alimento: "Pão glúten forma",
    calorias: "253",
    proteina: "12,0",
    colesterol: "NA",
    carboidrato: "44,1",
    fibra: "2,5"
  },
  {
    alimento: "Pão milho forma",
    calorias: "292",
    proteina: "8,3",
    colesterol: "6",
    carboidrato: "56,4",
    fibra: "4,3"
  },
  {
    alimento: "Pão trigo forma integral",
    calorias: "253",
    proteina: "9,4",
    colesterol: "NA",
    carboidrato: "49,9",
    fibra: "6,9"
  },
  {
    alimento: "Pão trigo francês",
    calorias: "300",
    proteina: "8,0",
    colesterol: "NA",
    carboidrato: "58,6",
    fibra: "2,3"
  },
  {
    alimento: "Pão trigo sovado",
    calorias: "311",
    proteina: "8,4",
    colesterol: "17",
    carboidrato: "61,5",
    fibra: "2,4"
  },
  {
    alimento: "Pastel de carne cru",
    calorias: "289",
    proteina: "10,7",
    colesterol: "18",
    carboidrato: "42,0",
    fibra: "1,0"
  },
  {
    alimento: "Pastel de carne frito",
    calorias: "388",
    proteina: "10,1",
    colesterol: "25",
    carboidrato: "43,8",
    fibra: "1,0"
  },
  {
    alimento: "Pastel de queijo cru",
    calorias: "308",
    proteina: "9,9",
    colesterol: "14",
    carboidrato: "45,9",
    fibra: "1,1"
  },
  {
    alimento: "Pastel de queijo frito",
    calorias: "422",
    proteina: "8,7",
    colesterol: "15",
    carboidrato: "48,1",
    fibra: "0,9"
  },
  {
    alimento: "Pastel massa crua",
    calorias: "310",
    proteina: "6,9",
    colesterol: "NA",
    carboidrato: "57,4",
    fibra: "1,4"
  },
  {
    alimento: "Pastel massa frita",
    calorias: "570",
    proteina: "6,0",
    colesterol: "NA",
    carboidrato: "49,3",
    fibra: "1,3"
  },
  {
    alimento: "Pipoca com óleo de soja sem sal",
    calorias: "448",
    proteina: "9,9",
    colesterol: "NA",
    carboidrato: "70,3",
    fibra: "14,3"
  },
  {
    alimento: "Polenta pré-cozida",
    calorias: "103",
    proteina: "2,3",
    colesterol: "NA",
    carboidrato: "23,3",
    fibra: "2,4"
  },
  {
    alimento: "Torrada pão francês",
    calorias: "377",
    proteina: "10,5",
    colesterol: "NA",
    carboidrato: "74,6",
    fibra: "3,4"
  },
  {
    alimento: "Abóbora cabotian cozida",
    calorias: "48",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "10,8",
    fibra: "2,5"
  },
  {
    alimento: "Abóbora cabotian crua",
    calorias: "39",
    proteina: "1,7",
    colesterol: "NA",
    carboidrato: "8,4",
    fibra: "2,2"
  },
  {
    alimento: "Abóbora menina brasileira crua",
    calorias: "14",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "3,3",
    fibra: "1,2"
  },
  {
    alimento: "Abóbora moranga crua",
    calorias: "12",
    proteina: "1,0",
    colesterol: "NA",
    carboidrato: "2,7",
    fibra: "1,7"
  },
  {
    alimento: "Abóbora moranga refogada",
    calorias: "29",
    proteina: "0,4",
    colesterol: "NA",
    carboidrato: "6,0",
    fibra: "1,5"
  },
  {
    alimento: "Abóbora pescoço crua",
    calorias: "24",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "6,1",
    fibra: "2,3"
  },
  {
    alimento: "Abobrinha italiana cozida",
    calorias: "15",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "3,0",
    fibra: "1,6"
  },
  {
    alimento: "Abobrinha italiana crua",
    calorias: "19",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "4,3",
    fibra: "1,4"
  },
  {
    alimento: "Abobrinha italiana refogada",
    calorias: "24",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "4,2",
    fibra: "1,4"
  },
  {
    alimento: "Abobrinha paulista crua",
    calorias: "31",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "7,9",
    fibra: "2,6"
  },
  {
    alimento: "Acelga crua",
    calorias: "21",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "4,6",
    fibra: "1,1"
  },
  {
    alimento: "Agrião cru",
    calorias: "17",
    proteina: "2,7",
    colesterol: "NA",
    carboidrato: "2,3",
    fibra: "2,1"
  },
  {
    alimento: "Aipo cru",
    calorias: "19",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "4,3",
    fibra: "1,0"
  },
  {
    alimento: "Alface americana crua",
    calorias: "9",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "1,7",
    fibra: "1,0"
  },
  {
    alimento: "Alface crespa crua",
    calorias: "11",
    proteina: "1,3",
    colesterol: "NA",
    carboidrato: "1,7",
    fibra: "1,8"
  },
  {
    alimento: "Alface lisa crua",
    calorias: "14",
    proteina: "1,7",
    colesterol: "NA",
    carboidrato: "2,4",
    fibra: "2,3"
  },
  {
    alimento: "Alface roxa crua",
    calorias: "13",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "2,5",
    fibra: "2,0"
  },
  {
    alimento: "Alfavaca crua",
    calorias: "29",
    proteina: "2,7",
    colesterol: "NA",
    carboidrato: "5,2",
    fibra: "4,1"
  },
  {
    alimento: "Alho cru",
    calorias: "113",
    proteina: "7,0",
    colesterol: "NA",
    carboidrato: "23,9",
    fibra: "4,3"
  },
  {
    alimento: "Alho-poró cru",
    calorias: "32",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "6,9",
    fibra: "2,5"
  },
  {
    alimento: "Almeirão cru",
    calorias: "18",
    proteina: "1,8",
    colesterol: "NA",
    carboidrato: "3,3",
    fibra: "2,6"
  },
  {
    alimento: "Almeirão refogado",
    calorias: "65",
    proteina: "1,7",
    colesterol: "NA",
    carboidrato: "5,7",
    fibra: "3,4"
  },
  {
    alimento: "Batata baroa cozida",
    calorias: "80",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "18,9",
    fibra: "1,8"
  },
  {
    alimento: "Batata baroa crua",
    calorias: "101",
    proteina: "1,0",
    colesterol: "NA",
    carboidrato: "24,0",
    fibra: "2,1"
  },
  {
    alimento: "Batata doce cozida",
    calorias: "77",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "18,4",
    fibra: "2,2"
  },
  {
    alimento: "Batata doce crua",
    calorias: "118",
    proteina: "1,3",
    colesterol: "NA",
    carboidrato: "28,2",
    fibra: "2,6"
  },
  {
    alimento: "Batata frita tipo chips industrializada",
    calorias: "543",
    proteina: "5,6",
    colesterol: "NA",
    carboidrato: "51,2",
    fibra: "2,5"
  },
  {
    alimento: "Batata inglesa cozida",
    calorias: "52",
    proteina: "1,2",
    colesterol: "NA",
    carboidrato: "11,9",
    fibra: "1,3"
  },
  {
    alimento: "Batata inglesa crua",
    calorias: "64",
    proteina: "1,8",
    colesterol: "NA",
    carboidrato: "14,7",
    fibra: "1,2"
  },
  {
    alimento: "Batata inglesa frita",
    calorias: "267",
    proteina: "5,0",
    colesterol: "NA",
    carboidrato: "35,6",
    fibra: "8,1"
  },
  {
    alimento: "Batata inglesa sauté",
    calorias: "68",
    proteina: "1,3",
    colesterol: "NA",
    carboidrato: "14,1",
    fibra: "1,4"
  },
  {
    alimento: "Berinjela cozida",
    calorias: "19",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "4,5",
    fibra: "2,5"
  },
  {
    alimento: "Berinjela crua",
    calorias: "20",
    proteina: "1,2",
    colesterol: "NA",
    carboidrato: "4,4",
    fibra: "2,9"
  },
  {
    alimento: "Beterraba cozida",
    calorias: "32",
    proteina: "1,3",
    colesterol: "NA",
    carboidrato: "7,2",
    fibra: "1,9"
  },
  {
    alimento: "Beterraba crua",
    calorias: "49",
    proteina: "1,9",
    colesterol: "NA",
    carboidrato: "11,1",
    fibra: "3,4"
  },
  {
    alimento: "Biscoito polvilho doce",
    calorias: "438",
    proteina: "1,3",
    colesterol: "9",
    carboidrato: "80,5",
    fibra: "1,2"
  },
  {
    alimento: "Brócolis cozido",
    calorias: "25",
    proteina: "2,1",
    colesterol: "NA",
    carboidrato: "4,4",
    fibra: "3,4"
  },
  {
    alimento: "Brócolis cru",
    calorias: "25",
    proteina: "3,6",
    colesterol: "NA",
    carboidrato: "4,0",
    fibra: "2,9"
  },
  {
    alimento: "Cará cozido",
    calorias: "78",
    proteina: "1,5",
    colesterol: "NA",
    carboidrato: "18,9",
    fibra: "2,6"
  },
  {
    alimento: "Cará cru",
    calorias: "96",
    proteina: "2,3",
    colesterol: "NA",
    carboidrato: "23,0",
    fibra: "7,3"
  },
  {
    alimento: "Caruru cru",
    calorias: "34",
    proteina: "3,2",
    colesterol: "NA",
    carboidrato: "6,0",
    fibra: "4,5"
  },
  {
    alimento: "Catalonha crua",
    calorias: "24",
    proteina: "1,9",
    colesterol: "NA",
    carboidrato: "4,8",
    fibra: "2,0"
  },
  {
    alimento: "Catalonha refogada",
    calorias: "63",
    proteina: "2,0",
    colesterol: "NA",
    carboidrato: "4,8",
    fibra: "3,7"
  },
  {
    alimento: "Cebola crua",
    calorias: "39",
    proteina: "1,7",
    colesterol: "NA",
    carboidrato: "8,9",
    fibra: "2,2"
  },
  {
    alimento: "Cebolinha crua",
    calorias: "20",
    proteina: "1,9",
    colesterol: "NA",
    carboidrato: "3,4",
    fibra: "3,6"
  },
  {
    alimento: "Cenoura cozida",
    calorias: "30",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "6,7",
    fibra: "2,6"
  },
  {
    alimento: "Cenoura crua",
    calorias: "34",
    proteina: "1,3",
    colesterol: "NA",
    carboidrato: "7,7",
    fibra: "3,2"
  },
  {
    alimento: "Chicória crua",
    calorias: "14",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "2,9",
    fibra: "2,2"
  },
  {
    alimento: "Chuchu cozido",
    calorias: "19",
    proteina: "0,4",
    colesterol: "NA",
    carboidrato: "4,8",
    fibra: "1,0"
  },
  {
    alimento: "Chuchu cru",
    calorias: "17",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "4,1",
    fibra: "1,3"
  },
  {
    alimento: "Coentro folhas desidratadas",
    calorias: "309",
    proteina: "20,9",
    colesterol: "NA",
    carboidrato: "48,0",
    fibra: "37,3"
  },
  {
    alimento: "Couve manteiga crua",
    calorias: "27",
    proteina: "2,9",
    colesterol: "NA",
    carboidrato: "4,3",
    fibra: "3,1"
  },
  {
    alimento: "Couve manteiga refogada ",
    calorias: "90",
    proteina: "1,7",
    colesterol: "NA",
    carboidrato: "8,7",
    fibra: "5,7"
  },
  {
    alimento: "Couve-flor crua",
    calorias: "23",
    proteina: "1,9",
    colesterol: "NA",
    carboidrato: "4,5",
    fibra: "2,4"
  },
  {
    alimento: "Couve-flor cozida",
    calorias: "19",
    proteina: "1,2",
    colesterol: "NA",
    carboidrato: "3,9",
    fibra: "2,1"
  },
  {
    alimento: "Espinafre Nova Zelândia cru",
    calorias: "16",
    proteina: "2,0",
    colesterol: "NA",
    carboidrato: "2,6",
    fibra: "2,1"
  },
  {
    alimento: "Espinafre Nova Zelândia refogado",
    calorias: "67",
    proteina: "2,7",
    colesterol: "NA",
    carboidrato: "4,2",
    fibra: "2,5"
  },
  {
    alimento: "Farinha de mandioca crua",
    calorias: "361",
    proteina: "1,6",
    colesterol: "NA",
    carboidrato: "87,9",
    fibra: "6,4"
  },
  {
    alimento: "Farinha de mandioca torrada",
    calorias: "365",
    proteina: "1,2",
    colesterol: "NA",
    carboidrato: "89,2",
    fibra: "6,5"
  },
  {
    alimento: "Farinha de puba",
    calorias: "360",
    proteina: "1,6",
    colesterol: "NA",
    carboidrato: "87,3",
    fibra: "4,2"
  },
  {
    alimento: "Fécula de mandioca",
    calorias: "331",
    proteina: "0,5",
    colesterol: "NA",
    carboidrato: "81,1",
    fibra: "0,6"
  },
  {
    alimento: "Feijão broto cru",
    calorias: "39",
    proteina: "4,2",
    colesterol: "NA",
    carboidrato: "7,8",
    fibra: "2,0"
  },
  {
    alimento: "Inhame cru",
    calorias: "97",
    proteina: "2,1",
    colesterol: "NA",
    carboidrato: "23,2",
    fibra: "1,7"
  },
  {
    alimento: "Jiló cru",
    calorias: "27",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "6,2",
    fibra: "4,8"
  },
  {
    alimento: "Jurubeba crua",
    calorias: "126",
    proteina: "4,4",
    colesterol: "NA",
    carboidrato: "23,1",
    fibra: "23,9"
  },
  {
    alimento: "Mandioca cozida",
    calorias: "125",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "30,1",
    fibra: "1,6"
  },
  {
    alimento: "Mandioca crua",
    calorias: "151",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "36,2",
    fibra: "1,9"
  },
  {
    alimento: "Mandioca farofa temperada",
    calorias: "406",
    proteina: "2,1",
    colesterol: "NA",
    carboidrato: "80,3",
    fibra: "7,8"
  },
  {
    alimento: "Mandioca frita",
    calorias: "300",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "50,3",
    fibra: "1,9"
  },
  {
    alimento: "Manjericão cru",
    calorias: "21",
    proteina: "2,0",
    colesterol: "NA",
    carboidrato: "3,6",
    fibra: "3,3"
  },
  {
    alimento: "Maxixe cru",
    calorias: "14",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "2,7",
    fibra: "2,2"
  },
  {
    alimento: "Mostarda folha crua",
    calorias: "18",
    proteina: "2,1",
    colesterol: "NA",
    carboidrato: "3,2",
    fibra: "1,9"
  },
  {
    alimento: "Nhoque batata cozido",
    calorias: "181",
    proteina: "5,9",
    colesterol: "15",
    carboidrato: "36,8",
    fibra: "1,8"
  },
  {
    alimento: "Nabo cru",
    calorias: "18",
    proteina: "1,2",
    colesterol: "NA",
    carboidrato: "4,1",
    fibra: "2,6"
  },
  {
    alimento: "Palmito juçara em conserva",
    calorias: "23",
    proteina: "1,8",
    colesterol: "NA",
    carboidrato: "4,3",
    fibra: "3,2"
  },
  {
    alimento: "Palmito pupunha em conserva",
    calorias: "29",
    proteina: "2,5",
    colesterol: "NA",
    carboidrato: "5,5",
    fibra: "2,6"
  },
  {
    alimento: "Pão de queijo assado",
    calorias: "363",
    proteina: "5,1",
    colesterol: "68",
    carboidrato: "34,2",
    fibra: "0,6"
  },
  {
    alimento: "Pão de queijo cru",
    calorias: "295",
    proteina: "3,6",
    colesterol: "63",
    carboidrato: "38,5",
    fibra: "1,0"
  },
  {
    alimento: "Pepino cru",
    calorias: "10",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "2,0",
    fibra: "1,1"
  },
  {
    alimento: "Pimentão amarelo cru",
    calorias: "28",
    proteina: "1,2",
    colesterol: "NA",
    carboidrato: "6,0",
    fibra: "1,9"
  },
  {
    alimento: "Pimentão verde cru",
    calorias: "21",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "4,9",
    fibra: "2,6"
  },
  {
    alimento: "Pimentão vermelho cru",
    calorias: "23",
    proteina: "1,0",
    colesterol: "NA",
    carboidrato: "5,5",
    fibra: "1,6"
  },
  {
    alimento: "Polvilho doce",
    calorias: "351",
    proteina: "0,4",
    colesterol: "NA",
    carboidrato: "86,8",
    fibra: "0,2"
  },
  {
    alimento: "Quiabo cru",
    calorias: "30",
    proteina: "1,9",
    colesterol: "NA",
    carboidrato: "6,4",
    fibra: "4,6"
  },
  {
    alimento: "Rabanete cru",
    calorias: "14",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "2,7",
    fibra: "2,2"
  },
  {
    alimento: "Repolho branco cru",
    calorias: "17",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "3,9",
    fibra: "1,9"
  },
  {
    alimento: "Repolho roxo cru",
    calorias: "31",
    proteina: "1,9",
    colesterol: "NA",
    carboidrato: "7,2",
    fibra: "2,0"
  },
  {
    alimento: "Repolho roxo refogado",
    calorias: "42",
    proteina: "1,8",
    colesterol: "NA",
    carboidrato: "7,6",
    fibra: "1,8"
  },
  {
    alimento: "Rúcula crua",
    calorias: "13",
    proteina: "1,8",
    colesterol: "NA",
    carboidrato: "2,2",
    fibra: "1,7"
  },
  {
    alimento: "Salsa crua",
    calorias: "33",
    proteina: "3,3",
    colesterol: "NA",
    carboidrato: "5,7",
    fibra: "1,9"
  },
  {
    alimento: "Seleta de legumes enlatada",
    calorias: "57",
    proteina: "3,4",
    colesterol: "NA",
    carboidrato: "12,7",
    fibra: "3,1"
  },
  {
    alimento: "Serralha crua",
    calorias: "30",
    proteina: "2,7",
    colesterol: "NA",
    carboidrato: "4,9",
    fibra: "3,5"
  },
  {
    alimento: "Taioba crua",
    calorias: "34",
    proteina: "2,9",
    colesterol: "NA",
    carboidrato: "5,4",
    fibra: "4,5"
  },
  {
    alimento: "Tomate com semente cru",
    calorias: "15",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "3,1",
    fibra: "1,2"
  },
  {
    alimento: "Tomate extrato",
    calorias: "61",
    proteina: "2,4",
    colesterol: "NA",
    carboidrato: "15,0",
    fibra: "2,8"
  },
  {
    alimento: "Tomate molho industrializado",
    calorias: "38",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "7,7",
    fibra: "3,1"
  },
  {
    alimento: "Tomate purê",
    calorias: "28",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "6,9",
    fibra: "1,0"
  },
  {
    alimento: "Tomate salada",
    calorias: "21",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "5,1",
    fibra: "2,3"
  },
  {
    alimento: "Vagem crua",
    calorias: "25",
    proteina: "1,8",
    colesterol: "NA",
    carboidrato: "5,3",
    fibra: "2,4"
  },
  {
    alimento: "Abacate cru",
    calorias: "96",
    proteina: "1,2",
    colesterol: "NA",
    carboidrato: "6,0",
    fibra: "6,3"
  },
  {
    alimento: "Abacaxi cru",
    calorias: "48",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "12,3",
    fibra: "1,0"
  },
  {
    alimento: "Abacaxi polpa congelada",
    calorias: "31",
    proteina: "0,5",
    colesterol: "NA",
    carboidrato: "7,8",
    fibra: "0,3"
  },
  {
    alimento: "Abiu cru",
    calorias: "62",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "14,9",
    fibra: "1,7"
  },
  {
    alimento: "Açaí polpa com xarope de guaraná e glucose",
    calorias: "110",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "21,5",
    fibra: "1,7"
  },
  {
    alimento: "Açaí polpa congelada",
    calorias: "58",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "6,2",
    fibra: "2,6"
  },
  {
    alimento: "Acerola crua",
    calorias: "33",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "8,0",
    fibra: "1,5"
  },
  {
    alimento: "Acerola polpa congelada",
    calorias: "22",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "5,5",
    fibra: "0,7"
  },
  {
    alimento: "Ameixa calda enlatada ",
    calorias: "183",
    proteina: "0,4",
    colesterol: "NA",
    carboidrato: "46,9",
    fibra: "0,5"
  },
  {
    alimento: "Ameixa crua",
    calorias: "53",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "13,9",
    fibra: "2,4"
  },
  {
    alimento: "Ameixa em calda enlatada drenada ",
    calorias: "177",
    proteina: "1,0",
    colesterol: "NA",
    carboidrato: "47,7",
    fibra: "4,5"
  },
  {
    alimento: "Atemóia crua",
    calorias: "97",
    proteina: "1,0",
    colesterol: "NA",
    carboidrato: "25,3",
    fibra: "2,1"
  },
  {
    alimento: "Banana da terra crua",
    calorias: "128",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "33,7",
    fibra: "1,5"
  },
  {
    alimento: "Banana doce em barra",
    calorias: "280",
    proteina: "2,2",
    colesterol: "NA",
    carboidrato: "75,7",
    fibra: "3,8"
  },
  {
    alimento: "Banana figo crua",
    calorias: "105",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "27,8",
    fibra: "2,8"
  },
  {
    alimento: "Banana maçã crua",
    calorias: "87",
    proteina: "1,8",
    colesterol: "NA",
    carboidrato: "22,3",
    fibra: "2,6"
  },
  {
    alimento: "Banana nanica crua",
    calorias: "92",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "23,8",
    fibra: "1,9"
  },
  {
    alimento: "Banana ouro crua",
    calorias: "112",
    proteina: "1,5",
    colesterol: "NA",
    carboidrato: "29,3",
    fibra: "2,0"
  },
  {
    alimento: "Banana pacova crua",
    calorias: "78",
    proteina: "1,2",
    colesterol: "NA",
    carboidrato: "20,3",
    fibra: "2,0"
  },
  {
    alimento: "Banana prata crua",
    calorias: "98",
    proteina: "1,3",
    colesterol: "NA",
    carboidrato: "26,0",
    fibra: "2,0"
  },
  {
    alimento: "Cacau cru",
    calorias: "74",
    proteina: "1,0",
    colesterol: "NA",
    carboidrato: "19,4",
    fibra: "2,2"
  },
  {
    alimento: "Cajá-Manga cru",
    calorias: "46",
    proteina: "1,3",
    colesterol: "NA",
    carboidrato: "11,4",
    fibra: "2,6"
  },
  {
    alimento: "Cajá polpa congelada",
    calorias: "26",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "6,4",
    fibra: "1,4"
  },
  {
    alimento: "Caju cru",
    calorias: "43",
    proteina: "1,0",
    colesterol: "NA",
    carboidrato: "10,3",
    fibra: "1,7"
  },
  {
    alimento: "Caju polpa congelada",
    calorias: "37",
    proteina: "0,5",
    colesterol: "NA",
    carboidrato: "9,4",
    fibra: "0,8"
  },
  {
    alimento: "Caju suco concentrado envasado",
    calorias: "45",
    proteina: "0,4",
    colesterol: "NA",
    carboidrato: "10,7",
    fibra: "0,6"
  },
  {
    alimento: "Caqui chocolate cru",
    calorias: "71",
    proteina: "0,4",
    colesterol: "NA",
    carboidrato: "19,3",
    fibra: "6,5"
  },
  {
    alimento: "Carambola crua",
    calorias: "46",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "11,5",
    fibra: "2,0"
  },
  {
    alimento: "Ciriguela crua",
    calorias: "76",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "18,9",
    fibra: "3,9"
  },
  {
    alimento: "Cupuaçu cru",
    calorias: "49",
    proteina: "1,2",
    colesterol: "NA",
    carboidrato: "10,4",
    fibra: "3,1"
  },
  {
    alimento: "Cupuaçu polpa congelada",
    calorias: "49",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "11,4",
    fibra: "1,6"
  },
  {
    alimento: "Figo cru",
    calorias: "41",
    proteina: "1,0",
    colesterol: "NA",
    carboidrato: "10,2",
    fibra: "1,8"
  },
  {
    alimento: "Figo enlatado em calda",
    calorias: "184",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "50,3",
    fibra: "2,0"
  },
  {
    alimento: "Fruta-pão crua",
    calorias: "67",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "17,2",
    fibra: "5,5"
  },
  {
    alimento: "Goiaba branca com casca crua",
    calorias: "52",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "12,4",
    fibra: "6,3"
  },
  {
    alimento: "Goiaba doce em pasta",
    calorias: "269",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "74,1",
    fibra: "3,7"
  },
  {
    alimento: "Goiaba doce cascão",
    calorias: "286",
    proteina: "0,4",
    colesterol: "NA",
    carboidrato: "78,7",
    fibra: "4,4"
  },
  {
    alimento: "Goiaba vermelha com casca crua",
    calorias: "54",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "13,0",
    fibra: "6,2"
  },
  {
    alimento: "Graviola crua",
    calorias: "62",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "15,8",
    fibra: "1,9"
  },
  {
    alimento: "Graviola polpa congelada",
    calorias: "38",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "9,8",
    fibra: "1,2"
  },
  {
    alimento: "Jabuticaba crua",
    calorias: "58",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "15,3",
    fibra: "2,3"
  },
  {
    alimento: "Jaca crua",
    calorias: "88",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "22,5",
    fibra: "2,4"
  },
  {
    alimento: "Jambo cru",
    calorias: "27",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "6,5",
    fibra: "5,1"
  },
  {
    alimento: "Jamelão cru",
    calorias: "41",
    proteina: "0,5",
    colesterol: "NA",
    carboidrato: "10,6",
    fibra: "1,8"
  },
  {
    alimento: "Kiwi cru",
    calorias: "51",
    proteina: "1,3",
    colesterol: "NA",
    carboidrato: "11,5",
    fibra: "2,7"
  },
  {
    alimento: "Laranja baía crua",
    calorias: "45",
    proteina: "1,0",
    colesterol: "NA",
    carboidrato: "11,5",
    fibra: "1,1"
  },
  {
    alimento: "Laranja baía suco",
    calorias: "37",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "8,7",
    fibra: "Tr"
  },
  {
    alimento: "Laranja da terra crua",
    calorias: "51",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "12,9",
    fibra: "4,0"
  },
  {
    alimento: "Laranja da terra suco",
    calorias: "41",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "9,6",
    fibra: "1,0"
  },
  {
    alimento: "Laranja lima crua",
    calorias: "46",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "11,5",
    fibra: "1,8"
  },
  {
    alimento: "Laranja lima suco",
    calorias: "39",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "9,2",
    fibra: "0,4"
  },
  {
    alimento: "Laranja pêra crua",
    calorias: "37",
    proteina: "1,0",
    colesterol: "NA",
    carboidrato: "8,9",
    fibra: "0,8"
  },
  {
    alimento: "Laranja pêra suco",
    calorias: "33",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "7,6",
    fibra: "Tr"
  },
  {
    alimento: "Laranja valência crua",
    calorias: "46",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "11,7",
    fibra: "1,7"
  },
  {
    alimento: "Laranja valência suco",
    calorias: "36",
    proteina: "0,5",
    colesterol: "NA",
    carboidrato: "8,6",
    fibra: "0,4"
  },
  {
    alimento: "Limão cravo suco",
    calorias: "14",
    proteina: "0,3",
    colesterol: "NA",
    carboidrato: "5,2",
    fibra: "Tr"
  },
  {
    alimento: "Limão galego suco",
    calorias: "22",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "7,3",
    fibra: "Tr"
  },
  {
    alimento: "Limão tahiti cru",
    calorias: "32",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "11,1",
    fibra: "1,2"
  },
  {
    alimento: "Maçã Argentina com casca crua",
    calorias: "63",
    proteina: "0,2",
    colesterol: "NA",
    carboidrato: "16,6",
    fibra: "2,0"
  },
  {
    alimento: "Maçã Fuji com casca crua",
    calorias: "56",
    proteina: "0,3",
    colesterol: "NA",
    carboidrato: "15,2",
    fibra: "1,3"
  },
  {
    alimento: "Macaúba crua",
    calorias: "404",
    proteina: "2,1",
    colesterol: "NA",
    carboidrato: "13,9",
    fibra: "13,4"
  },
  {
    alimento: " Mamão doce em calda drenado",
    calorias: "196",
    proteina: "0,2",
    colesterol: "NA",
    carboidrato: "54,0",
    fibra: "1,3"
  },
  {
    alimento: "Mamão Formosa cru",
    calorias: "45",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "11,6",
    fibra: "1,8"
  },
  {
    alimento: "Mamão Papaia cru",
    calorias: "40",
    proteina: "0,5",
    colesterol: "NA",
    carboidrato: "10,4",
    fibra: "1,0"
  },
  {
    alimento: " Mamão verde doce em calda drenado",
    calorias: "209",
    proteina: "0,3",
    colesterol: "NA",
    carboidrato: "57,6",
    fibra: "1,2"
  },
  {
    alimento: "Manga Haden crua",
    calorias: "64",
    proteina: "0,4",
    colesterol: "NA",
    carboidrato: "16,7",
    fibra: "1,6"
  },
  {
    alimento: "Manga Palmer crua",
    calorias: "72",
    proteina: "0,4",
    colesterol: "NA",
    carboidrato: "19,4",
    fibra: "1,6"
  },
  {
    alimento: "Manga polpa congelada",
    calorias: "48",
    proteina: "0,4",
    colesterol: "NA",
    carboidrato: "12,5",
    fibra: "1,1"
  },
  {
    alimento: "Manga Tommy Atkins crua",
    calorias: "51",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "12,8",
    fibra: "2,1"
  },
  {
    alimento: "Maracujá cru",
    calorias: "68",
    proteina: "2,0",
    colesterol: "NA",
    carboidrato: "12,3",
    fibra: "1,1"
  },
  {
    alimento: "Maracujá polpa congelada",
    calorias: "39",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "9,6",
    fibra: "0,5"
  },
  {
    alimento: "Maracujá suco concentrado envasado",
    calorias: "42",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "9,6",
    fibra: "0,4"
  },
  {
    alimento: "Melancia crua",
    calorias: "33",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "8,1",
    fibra: "0,1"
  },
  {
    alimento: "Melão cru",
    calorias: "29",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "7,5",
    fibra: "0,3"
  },
  {
    alimento: "Mexerica Murcote crua",
    calorias: "58",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "14,9",
    fibra: "3,1"
  },
  {
    alimento: "Mexerica Rio crua",
    calorias: "37",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "9,3",
    fibra: "2,7"
  },
  {
    alimento: "Morango cru",
    calorias: "30",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "6,8",
    fibra: "1,7"
  },
  {
    alimento: "Nêspera crua",
    calorias: "43",
    proteina: "0,3",
    colesterol: "NA",
    carboidrato: "11,5",
    fibra: "3,0"
  },
  {
    alimento: "Pequi cru",
    calorias: "205",
    proteina: "2,3",
    colesterol: "NA",
    carboidrato: "13,0",
    fibra: "19,0"
  },
  {
    alimento: "Pêra Park crua",
    calorias: "61",
    proteina: "0,2",
    colesterol: "NA",
    carboidrato: "16,1",
    fibra: "3,0"
  },
  {
    alimento: "Pêra Williams crua",
    calorias: "53",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "14,0",
    fibra: "3,0"
  },
  {
    alimento: "Pêssego Aurora cru",
    calorias: "36",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "9,3",
    fibra: "1,4"
  },
  {
    alimento: "Pêssego enlatado em calda",
    calorias: "63",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "16,9",
    fibra: "1,0"
  },
  {
    alimento: "Pinha crua",
    calorias: "88",
    proteina: "1,5",
    colesterol: "NA",
    carboidrato: "22,4",
    fibra: "3,4"
  },
  {
    alimento: "Pitanga crua",
    calorias: "41",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "10,2",
    fibra: "3,2"
  },
  {
    alimento: "Pitanga polpa congelada",
    calorias: "19",
    proteina: "0,3",
    colesterol: "NA",
    carboidrato: "4,8",
    fibra: "0,7"
  },
  {
    alimento: "Romã crua",
    calorias: "56",
    proteina: "0,4",
    colesterol: "NA",
    carboidrato: "15,1",
    fibra: "0,4"
  },
  {
    alimento: "Tamarindo cru",
    calorias: "276",
    proteina: "3,2",
    colesterol: "NA",
    carboidrato: "72,5",
    fibra: "6,4"
  },
  {
    alimento: "Tangerina Poncã crua",
    calorias: "38",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "9,6",
    fibra: "0,9"
  },
  {
    alimento: "Tangerina Poncã suco",
    calorias: "36",
    proteina: "0,5",
    colesterol: "NA",
    carboidrato: "8,8",
    fibra: "Tr"
  },
  {
    alimento: "Tucumã cru",
    calorias: "262",
    proteina: "2,1",
    colesterol: "NA",
    carboidrato: "26,5",
    fibra: "12,7"
  },
  {
    alimento: "Umbu cru",
    calorias: "37",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "9,4",
    fibra: "2,0"
  },
  {
    alimento: "Umbu polpa congelada",
    calorias: "34",
    proteina: "0,5",
    colesterol: "NA",
    carboidrato: "8,8",
    fibra: "1,3"
  },
  {
    alimento: "Uva Itália crua",
    calorias: "53",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "13,6",
    fibra: "0,9"
  },
  {
    alimento: "Uva Rubi crua",
    calorias: "49",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "12,7",
    fibra: "0,9"
  },
  {
    alimento: "Uva suco concentrado envasado",
    calorias: "58",
    proteina: "Tr",
    colesterol: "NA",
    carboidrato: "14,7",
    fibra: "0,2"
  },
  {
    alimento: "Azeite de dendê",
    calorias: "884",
    proteina: "NA",
    colesterol: "NA",
    carboidrato: "NA",
    fibra: "NA"
  },
  {
    alimento: "Azeite de oliva extra virgem",
    calorias: "884",
    proteina: "NA",
    colesterol: "NA",
    carboidrato: "NA",
    fibra: "NA"
  },
  {
    alimento: "Manteiga com sal",
    calorias: "726",
    proteina: "0,4",
    colesterol: "201",
    carboidrato: "0,1",
    fibra: "NA"
  },
  {
    alimento: "Manteiga sem sal",
    calorias: "758",
    proteina: "0,4",
    colesterol: "214",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Margarina com óleo hidrogenado com sal (65% de lipídeos)",
    calorias: "596",
    proteina: "Tr",
    colesterol: "NA",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Margarina com óleo hidrogenado sem sal (80% de lipídeos)",
    calorias: "723",
    proteina: "Tr",
    colesterol: "NA",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Margarina com óleo interesterificado com sal (65%de lipídeos)",
    calorias: "594",
    proteina: "Tr",
    colesterol: "NA",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento:
        "Margarina com óleo interesterificado sem sal (65% de lipídeos)",
    calorias: "593",
    proteina: "Tr",
    colesterol: "NA",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Óleo de babaçu",
    calorias: "884",
    proteina: "NA",
    colesterol: "NA",
    carboidrato: "NA",
    fibra: "NA"
  },
  {
    alimento: "Óleo de canola",
    calorias: "884",
    proteina: "NA",
    colesterol: "NA",
    carboidrato: "NA",
    fibra: "NA"
  },
  {
    alimento: "Óleo de girassol",
    calorias: "884",
    proteina: "NA",
    colesterol: "NA",
    carboidrato: "NA",
    fibra: "NA"
  },
  {
    alimento: "Óleo de milho",
    calorias: "884",
    proteina: "NA",
    colesterol: "NA",
    carboidrato: "NA",
    fibra: "NA"
  },
  {
    alimento: "Óleo de pequi",
    calorias: "884",
    proteina: "NA",
    colesterol: "NA",
    carboidrato: "NA",
    fibra: "NA"
  },
  {
    alimento: "Óleo de soja",
    calorias: "884",
    proteina: "NA",
    colesterol: "NA",
    carboidrato: "NA",
    fibra: "NA"
  },
  {
    alimento: "Abadejo filé congelado assado",
    calorias: "112",
    proteina: "23,5",
    colesterol: "103",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Abadejo filé congeladocozido",
    calorias: "91",
    proteina: "19,3",
    colesterol: "87",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Abadejo filé congelado cru",
    calorias: "59",
    proteina: "13,1",
    colesterol: "31",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Abadejo filé congelado grelhado",
    calorias: "130",
    proteina: "27,6",
    colesterol: "136",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Atum conserva em óleo",
    calorias: "166",
    proteina: "26,2",
    colesterol: "53",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Atum fresco cru",
    calorias: "118",
    proteina: "25,7",
    colesterol: "48",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Bacalhau salgado cru",
    calorias: "136",
    proteina: "29,0",
    colesterol: "139",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Bacalhau salgado refogado",
    calorias: "140",
    proteina: "24,0",
    colesterol: "112",
    carboidrato: "1,2",
    fibra: "*"
  },
  {
    alimento: "Cação posta com farinha de trigo frita",
    calorias: "208",
    proteina: "25,0",
    colesterol: "75",
    carboidrato: "3,1",
    fibra: "0,5"
  },
  {
    alimento: "Cação posta cozida",
    calorias: "116",
    proteina: "25,6",
    colesterol: "83",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Cação posta crua",
    calorias: "83",
    proteina: "17,9",
    colesterol: "36",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Camarão Rio Grande grande cozido",
    calorias: "90",
    proteina: "19,0",
    colesterol: "241",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Camarão Rio Grande grande cru",
    calorias: "47",
    proteina: "10,0",
    colesterol: "124",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Camarão Sete Barbas sem cabeça com casca frito",
    calorias: "231",
    proteina: "18,4",
    colesterol: "283",
    carboidrato: "2,9",
    fibra: "NA"
  },
  {
    alimento: "Caranguejo cozido",
    calorias: "83",
    proteina: "18,5",
    colesterol: "85",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Corimba cru",
    calorias: "128",
    proteina: "17,4",
    colesterol: "40",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Corimbatá assado",
    calorias: "261",
    proteina: "19,9",
    colesterol: "80",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Corimbatá cozido",
    calorias: "239",
    proteina: "20,1",
    colesterol: "75",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Corvina de água doce crua",
    calorias: "101",
    proteina: "18,9",
    colesterol: "73",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Corvina do mar crua",
    calorias: "94",
    proteina: "18,6",
    colesterol: "67",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Corvina grande assada",
    calorias: "147",
    proteina: "26,8",
    colesterol: "117",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Corvina grande cozida",
    calorias: "100",
    proteina: "23,4",
    colesterol: "123",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Dourada de água doce fresca",
    calorias: "131",
    proteina: "18,8",
    colesterol: "52",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Lambari congelado cru",
    calorias: "131",
    proteina: "16,8",
    colesterol: "159",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Lambari congelado frito",
    calorias: "327",
    proteina: "28,4",
    colesterol: "246",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Lambari fresco cru",
    calorias: "152",
    proteina: "15,7",
    colesterol: "144",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Manjuba com farinha de trigo frita",
    calorias: "344",
    proteina: "23,5",
    colesterol: "282",
    carboidrato: "10,2",
    fibra: "0,4"
  },
  {
    alimento: "Manjuba frita",
    calorias: "349",
    proteina: "30,1",
    colesterol: "270",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Merluza filé assado",
    calorias: "122",
    proteina: "26,6",
    colesterol: "91",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Merluza filé cru",
    calorias: "89",
    proteina: "16,6",
    colesterol: "57",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Merluza filé frito",
    calorias: "192",
    proteina: "26,9",
    colesterol: "109",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Pescada branca crua",
    calorias: "111",
    proteina: "16,3",
    colesterol: "51",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Pescada branca frita",
    calorias: "223",
    proteina: "27,4",
    colesterol: "165",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Pescada filé com farinha de trigo frito",
    calorias: "283",
    proteina: "21,4",
    colesterol: "73",
    carboidrato: "5,0",
    fibra: "Tr"
  },
  {
    alimento: "Pescada filé cru",
    calorias: "107",
    proteina: "16,7",
    colesterol: "65",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Pescada filé frito",
    calorias: "154",
    proteina: "28,6",
    colesterol: "81",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Pescada filé molho escabeche",
    calorias: "142",
    proteina: "11,8",
    colesterol: "43",
    carboidrato: "5,0",
    fibra: "0,8"
  },
  {
    alimento: "Pescadinha crua",
    calorias: "76",
    proteina: "15,5",
    colesterol: "84",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Pintado assado",
    calorias: "192",
    proteina: "36,5",
    colesterol: "126",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Pintado cru",
    calorias: "91",
    proteina: "18,6",
    colesterol: "50",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Pintado grelhado",
    calorias: "152",
    proteina: "30,8",
    colesterol: "99",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Porquinho cru",
    calorias: "93",
    proteina: "20,5",
    colesterol: "49",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Salmão filé com pele fresco  grelhado",
    calorias: "229",
    proteina: "23,9",
    colesterol: "85",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Salmão sem pele fresco cru",
    calorias: "170",
    proteina: "19,3",
    colesterol: "53",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Salmão sem pele fresco grelhado",
    calorias: "243",
    proteina: "26,1",
    colesterol: "73",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Sardinha assada",
    calorias: "164",
    proteina: "32,2",
    colesterol: "109",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Sardinha conserva em óleo",
    calorias: "285",
    proteina: "15,9",
    colesterol: "73",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Sardinha frita",
    calorias: "257",
    proteina: "33,4",
    colesterol: "103",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Sardinha inteira crua",
    calorias: "114",
    proteina: "21,1",
    colesterol: "61",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Tucunaré filé congelado cru",
    calorias: "88",
    proteina: "18,0",
    colesterol: "47",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Apresuntado",
    calorias: "129",
    proteina: "13,5",
    colesterol: "38",
    carboidrato: "2,9",
    fibra: "NA"
  },
  {
    alimento: "Caldo de carne tablete",
    calorias: "241",
    proteina: "7,8",
    colesterol: "Tr",
    carboidrato: "15,1",
    fibra: "0,6"
  },
  {
    alimento: "Caldo de galinha tablete",
    calorias: "251",
    proteina: "6,3",
    colesterol: "2",
    carboidrato: "10,6",
    fibra: "11,8"
  },
  {
    alimento: "Carne bovina acém moído cozido",
    calorias: "212",
    proteina: "26,7",
    colesterol: "103",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina acém moído cru",
    calorias: "137",
    proteina: "19,4",
    colesterol: "58",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina acém sem gordura cozido",
    calorias: "215",
    proteina: "27,3",
    colesterol: "107",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina acém sem gordura cru",
    calorias: "144",
    proteina: "20,8",
    colesterol: "53",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina almôndegas cruas",
    calorias: "189",
    proteina: "12,3",
    colesterol: "34",
    carboidrato: "9,8",
    fibra: "*"
  },
  {
    alimento: "Carne bovina almôndegas fritas",
    calorias: "272",
    proteina: "18,2",
    colesterol: "36",
    carboidrato: "14,3",
    fibra: "*"
  },
  {
    alimento: "Carne bovina bucho cozido",
    calorias: "133",
    proteina: "21,6",
    colesterol: "245",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina bucho cru",
    calorias: "137",
    proteina: "20,5",
    colesterol: "145",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina capa de contra-filé com gordura crua",
    calorias: "217",
    proteina: "19,2",
    colesterol: "63",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina capa de contra-filé com gordura grelhada",
    calorias: "312",
    proteina: "30,7",
    colesterol: "120",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina capa de contra-filé sem gordura crua",
    calorias: "131",
    proteina: "21,5",
    colesterol: "58",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina capa de contra-filé sem gordura grelhada",
    calorias: "239",
    proteina: "35,1",
    colesterol: "80",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina charque cozido",
    calorias: "263",
    proteina: "36,4",
    colesterol: "113",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina charque cru",
    calorias: "249",
    proteina: "22,7",
    colesterol: "81",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina contra-filé à milanesa",
    calorias: "352",
    proteina: "20,6",
    colesterol: "99",
    carboidrato: "12,2",
    fibra: "0,4"
  },
  {
    alimento: "Carne bovina contra-filé de costela cru",
    calorias: "202",
    proteina: "19,8",
    colesterol: "52",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina contra-filé de costela grelhado",
    calorias: "275",
    proteina: "29,9",
    colesterol: "98",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina contra-filé com gordura cru",
    calorias: "206",
    proteina: "21,2",
    colesterol: "73",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina contra-filé com gordura grelhado",
    calorias: "278",
    proteina: "32,4",
    colesterol: "144",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina contra-filé sem gordura cru",
    calorias: "157",
    proteina: "24,0",
    colesterol: "59",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina contra-filé sem gordura grelhado",
    calorias: "194",
    proteina: "35,9",
    colesterol: "102",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina costela assada",
    calorias: "373",
    proteina: "28,8",
    colesterol: "95",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina costela crua",
    calorias: "358",
    proteina: "16,7",
    colesterol: "44",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina coxão duro sem gordura cozido",
    calorias: "217",
    proteina: "31,9",
    colesterol: "71",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina coxão duro sem gordura cru",
    calorias: "148",
    proteina: "21,5",
    colesterol: "60",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina coxão mole sem gordura cozido",
    calorias: "219",
    proteina: "32,4",
    colesterol: "84",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina coxão mole sem gordura cru",
    calorias: "169",
    proteina: "21,2",
    colesterol: "84",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina cupim assado",
    calorias: "330",
    proteina: "28,6",
    colesterol: "91",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina cupim cru",
    calorias: "221",
    proteina: "19,5",
    colesterol: "51",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina fígado cru",
    calorias: "141",
    proteina: "20,7",
    colesterol: "393",
    carboidrato: "1,1",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina fígado grelhado",
    calorias: "225",
    proteina: "29,9",
    colesterol: "601",
    carboidrato: "4,2",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina filé mingnon sem gordura cru",
    calorias: "143",
    proteina: "21,6",
    colesterol: "55",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina filé mingnon sem gordura grelhado",
    calorias: "220",
    proteina: "32,8",
    colesterol: "103",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina flanco sem gordura cozido",
    calorias: "196",
    proteina: "29,4",
    colesterol: "62",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina flanco sem gordura cru",
    calorias: "141",
    proteina: "20,0",
    colesterol: "50",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina fraldinha com gordura cozida",
    calorias: "338",
    proteina: "24,2",
    colesterol: "65",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina fraldinha com gordura crua",
    calorias: "221",
    proteina: "17,6",
    colesterol: "54",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina lagarto cozido",
    calorias: "222",
    proteina: "32,9",
    colesterol: "56",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina lagarto cru",
    calorias: "135",
    proteina: "20,5",
    colesterol: "56",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina língua cozida",
    calorias: "315",
    proteina: "21,4",
    colesterol: "105",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina língua crua",
    calorias: "215",
    proteina: "17,1",
    colesterol: "118",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina maminha crua",
    calorias: "153",
    proteina: "20,9",
    colesterol: "51",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina maminha grelhada",
    calorias: "153",
    proteina: "30,7",
    colesterol: "88",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina miolo de alcatra sem gordura cru",
    calorias: "163",
    proteina: "21,6",
    colesterol: "60",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina miolo de alcatra sem gordura grelhado",
    calorias: "241",
    proteina: "31,9",
    colesterol: "92",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina músculo sem gordura cozido",
    calorias: "194",
    proteina: "31,2",
    colesterol: "56",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina músculo sem gordura cru",
    calorias: "142",
    proteina: "21,6",
    colesterol: "51",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina paleta com gordura crua",
    calorias: "159",
    proteina: "21,4",
    colesterol: "58",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina paleta sem gordura cozida",
    calorias: "194",
    proteina: "29,7",
    colesterol: "56",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina paleta sem gordura crua",
    calorias: "141",
    proteina: "21,0",
    colesterol: "42",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina patinho sem gordura cru",
    calorias: "133",
    proteina: "21,7",
    colesterol: "56",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina patinho sem gordura grelhado",
    calorias: "219",
    proteina: "35,9",
    colesterol: "126",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina peito sem gordura cozido",
    calorias: "338",
    proteina: "22,2",
    colesterol: "100",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina peito sem gordura cru",
    calorias: "259",
    proteina: "17,6",
    colesterol: "59",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina picanha com gordura crua",
    calorias: "213",
    proteina: "18,8",
    colesterol: "60",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina picanha com gordura grelhada",
    calorias: "289",
    proteina: "26,4",
    colesterol: "92",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina picanha sem gordura crua",
    calorias: "134",
    proteina: "21,3",
    colesterol: "75",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina picanha sem gordura grelhada",
    calorias: "238",
    proteina: "31,9",
    colesterol: "100",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina seca cozida",
    calorias: "313",
    proteina: "26,9",
    colesterol: "100",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Carne bovina seca crua",
    calorias: "313",
    proteina: "19,7",
    colesterol: "92",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Coxinha de frango frita",
    calorias: "283",
    proteina: "9,6",
    colesterol: "15",
    carboidrato: "34,5",
    fibra: "5,0"
  },
  {
    alimento: "Croquete de carne cru",
    calorias: "246",
    proteina: "12,0",
    colesterol: "30",
    carboidrato: "13,9",
    fibra: "NA"
  },
  {
    alimento: "Croquete de carne frito",
    calorias: "347",
    proteina: "16,9",
    colesterol: "38",
    carboidrato: "18,1",
    fibra: "NA"
  },
  {
    alimento: "Empada de frango pré-cozida assada",
    calorias: "358",
    proteina: "6,9",
    colesterol: "23",
    carboidrato: "47,5",
    fibra: "2,2"
  },
  {
    alimento: "Empada de frango pré-cozida",
    calorias: "377",
    proteina: "7,3",
    colesterol: "23",
    carboidrato: "35,5",
    fibra: "2,2"
  },
  {
    alimento: "Frango asa com pele crua",
    calorias: "213",
    proteina: "18,1",
    colesterol: "113",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango caipira inteiro com pele cozido",
    calorias: "243",
    proteina: "23,9",
    colesterol: "110",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango caipira inteiro sem pele cozido",
    calorias: "196",
    proteina: "29,6",
    colesterol: "106",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango coração cru",
    calorias: "222",
    proteina: "12,6",
    colesterol: "159",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango coração grelhado",
    calorias: "207",
    proteina: "22,4",
    colesterol: "280",
    carboidrato: "0,6",
    fibra: "NA"
  },
  {
    alimento: "Frango coxa com pele assada",
    calorias: "215",
    proteina: "28,5",
    colesterol: "145",
    carboidrato: "0,1",
    fibra: "NA"
  },
  {
    alimento: "Frango coxa com pele crua",
    calorias: "161",
    proteina: "17,1",
    colesterol: "97",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango coxa sem pele cozida",
    calorias: "167",
    proteina: "26,9",
    colesterol: "133",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango coxa sem pele crua",
    calorias: "120",
    proteina: "17,8",
    colesterol: "91",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango fígado cru",
    calorias: "106",
    proteina: "17,6",
    colesterol: "341",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango filé à milanesa",
    calorias: "221",
    proteina: "28,5",
    colesterol: "84",
    carboidrato: "7,5",
    fibra: "1,1"
  },
  {
    alimento: "Frango inteiro com pele cru",
    calorias: "226",
    proteina: "16,4",
    colesterol: "85",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango inteiro sem pele assado",
    calorias: "187",
    proteina: "28,0",
    colesterol: "111",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango inteiro sem pele cozido",
    calorias: "170",
    proteina: "25,0",
    colesterol: "99",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango inteiro sem pele cru",
    calorias: "129",
    proteina: "20,6",
    colesterol: "78",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango peito com pele assado",
    calorias: "212",
    proteina: "33,4",
    colesterol: "109",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango peito com pele cru",
    calorias: "149",
    proteina: "20,8",
    colesterol: "80",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango peito sem pele cozido",
    calorias: "163",
    proteina: "31,5",
    colesterol: "89",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango peito sem pele cru",
    calorias: "119",
    proteina: "21,5",
    colesterol: "59",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango peito sem pele grelhado",
    calorias: "159",
    proteina: "32,0",
    colesterol: "89",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango sobrecoxa com pele assada",
    calorias: "260",
    proteina: "28,7",
    colesterol: "158",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango sobrecoxa com pele crua",
    calorias: "255",
    proteina: "15,5",
    colesterol: "88",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango sobrecoxa sem pele assada",
    calorias: "233",
    proteina: "29,2",
    colesterol: "145",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Frango sobrecoxa sem pele crua",
    calorias: "162",
    proteina: "17,6",
    colesterol: "84",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Hambúrguer bovino cru",
    calorias: "215",
    proteina: "13,2",
    colesterol: "70",
    carboidrato: "4,2",
    fibra: "*"
  },
  {
    alimento: "Hambúrguer bovino frito",
    calorias: "258",
    proteina: "20,0",
    colesterol: "49",
    carboidrato: "6,3",
    fibra: "*"
  },
  {
    alimento: "Hambúrguer bovino grelhado",
    calorias: "210",
    proteina: "13,2",
    colesterol: "59",
    carboidrato: "11,3",
    fibra: "*"
  },
  {
    alimento: "Lingüiça frango crua",
    calorias: "218",
    proteina: "14,2",
    colesterol: "64",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Lingüiça frango frita",
    calorias: "245",
    proteina: "18,3",
    colesterol: "76",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Lingüiça frango grelhada",
    calorias: "244",
    proteina: "18,2",
    colesterol: "80",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Lingüiça porco crua",
    calorias: "227",
    proteina: "16,1",
    colesterol: "53",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Lingüiça porco frita",
    calorias: "280",
    proteina: "20,5",
    colesterol: "75",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Lingüiça porco grelhada",
    calorias: "296",
    proteina: "23,2",
    colesterol: "82",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Mortadela",
    calorias: "269",
    proteina: "12,0",
    colesterol: "83",
    carboidrato: "5,8",
    fibra: "NA"
  },
  {
    alimento: "Peru congelado assado",
    calorias: "163",
    proteina: "26,2",
    colesterol: "91",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Peru congelado cru",
    calorias: "94",
    proteina: "18,1",
    colesterol: "68",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Porco bisteca crua",
    calorias: "164",
    proteina: "21,5",
    colesterol: "56",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Porco bisteca frita",
    calorias: "311",
    proteina: "33,7",
    colesterol: "126",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Porco bisteca grelhada",
    calorias: "280",
    proteina: "28,9",
    colesterol: "82",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Porco costela assada",
    calorias: "402",
    proteina: "30,2",
    colesterol: "113",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Porco costela crua",
    calorias: "256",
    proteina: "18,0",
    colesterol: "69",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Porco lombo assado",
    calorias: "210",
    proteina: "35,7",
    colesterol: "103",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Porco lombo cru",
    calorias: "176",
    proteina: "22,6",
    colesterol: "55",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Porco orelha salgada crua",
    calorias: "258",
    proteina: "18,5",
    colesterol: "83",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Porco pernil assado",
    calorias: "262",
    proteina: "32,1",
    colesterol: "110",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Porco pernil cru",
    calorias: "186",
    proteina: "20,1",
    colesterol: "59",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Porco rabo salgado cru",
    calorias: "377",
    proteina: "15,6",
    colesterol: "89",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Presunto com capa de gordura",
    calorias: "128",
    proteina: "14,4",
    colesterol: "40",
    carboidrato: "1,4",
    fibra: "NA"
  },
  {
    alimento: "Presunto sem capa de gordura",
    calorias: "94",
    proteina: "14,3",
    colesterol: "36",
    carboidrato: "2,1",
    fibra: "NA"
  },
  {
    alimento: "Quibe assado",
    calorias: "136",
    proteina: "14,6",
    colesterol: "34",
    carboidrato: "12,9",
    fibra: "1,9"
  },
  {
    alimento: "Quibe cru",
    calorias: "109",
    proteina: "12,4",
    colesterol: "27",
    carboidrato: "10,8",
    fibra: "1,6"
  },
  {
    alimento: "Quibe frito",
    calorias: "254",
    proteina: "14,9",
    colesterol: "38",
    carboidrato: "12,3",
    fibra: "NA"
  },
  {
    alimento: "Salame",
    calorias: "398",
    proteina: "25,8",
    colesterol: "85",
    carboidrato: "2,9",
    fibra: "NA"
  },
  {
    alimento: "Toucinho cru",
    calorias: "593",
    proteina: "11,5",
    colesterol: "73",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Toucinho frito",
    calorias: "697",
    proteina: "27,3",
    colesterol: "89",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Bebida láctea pêssego",
    calorias: "55",
    proteina: "2,1",
    colesterol: "5",
    carboidrato: "7,6",
    fibra: "0,3"
  },
  {
    alimento: "Creme de Leite",
    calorias: "221",
    proteina: "1,5",
    colesterol: "66",
    carboidrato: "4,5",
    fibra: "NA"
  },
  {
    alimento: "Iogurte natural",
    calorias: "51",
    proteina: "4,1",
    colesterol: "14",
    carboidrato: "1,9",
    fibra: "NA"
  },
  {
    alimento: "Iogurte natural desnatado",
    calorias: "41",
    proteina: "3,8",
    colesterol: "3",
    carboidrato: "5,8",
    fibra: "NA"
  },
  {
    alimento: "Iogurte sabor abacaxi",
    calorias: "*",
    proteina: "*",
    colesterol: "6",
    carboidrato: "*",
    fibra: "*"
  },
  {
    alimento: "Iogurte sabor morango",
    calorias: "70",
    proteina: "2,7",
    colesterol: "7",
    carboidrato: "9,7",
    fibra: "0,2"
  },
  {
    alimento: "Iogurte sabor pêssego",
    calorias: "68",
    proteina: "2,5",
    colesterol: "8",
    carboidrato: "9,4",
    fibra: "0,7"
  },
  {
    alimento: "Leite condensado",
    calorias: "313",
    proteina: "7,7",
    colesterol: "28",
    carboidrato: "57,0",
    fibra: "NA"
  },
  {
    alimento: "Leite de cabra",
    calorias: "66",
    proteina: "3,1",
    colesterol: "14",
    carboidrato: "5,2",
    fibra: "NA"
  },
  {
    alimento: "Leite de vaca achocolatado",
    calorias: "83",
    proteina: "2,1",
    colesterol: "6",
    carboidrato: "14,2",
    fibra: "0,6"
  },
  {
    alimento: "Leite de vaca desnatado pó",
    calorias: "362",
    proteina: "34,7",
    colesterol: "25",
    carboidrato: "53,0",
    fibra: "NA"
  },
  {
    alimento: "Leite de vaca desnatado UHT",
    calorias: "*",
    proteina: "*",
    colesterol: "4",
    carboidrato: "*",
    fibra: "NA"
  },
  {
    alimento: "Leite de vaca integral",
    calorias: "*",
    proteina: "*",
    colesterol: "10",
    carboidrato: "*",
    fibra: "NA"
  },
  {
    alimento: "Leite de vaca integral pó",
    calorias: "497",
    proteina: "25,4",
    colesterol: "85",
    carboidrato: "39,2",
    fibra: "NA"
  },
  {
    alimento: "Leite fermentado",
    calorias: "70",
    proteina: "1,9",
    colesterol: "2",
    carboidrato: "15,7",
    fibra: "NA"
  },
  {
    alimento: "Queijo minas frescal",
    calorias: "264",
    proteina: "17,4",
    colesterol: "62",
    carboidrato: "3,2",
    fibra: "NA"
  },
  {
    alimento: "Queijo minas meia cura",
    calorias: "321",
    proteina: "21,2",
    colesterol: "76",
    carboidrato: "3,6",
    fibra: "NA"
  },
  {
    alimento: "Queijo mozarela",
    calorias: "330",
    proteina: "22,6",
    colesterol: "80",
    carboidrato: "3,0",
    fibra: "NA"
  },
  {
    alimento: "Queijo parmesão",
    calorias: "453",
    proteina: "35,6",
    colesterol: "106",
    carboidrato: "1,7",
    fibra: "NA"
  },
  {
    alimento: "Queijo pasteurizado",
    calorias: "303",
    proteina: "9,4",
    colesterol: "82",
    carboidrato: "5,7",
    fibra: "NA"
  },
  {
    alimento: "Queijo petit suisse morango",
    calorias: "121",
    proteina: "5,8",
    colesterol: "12",
    carboidrato: "18,5",
    fibra: "NA"
  },
  {
    alimento: "Queijo prato",
    calorias: "360",
    proteina: "22,7",
    colesterol: "91",
    carboidrato: "1,9",
    fibra: "NA"
  },
  {
    alimento: "Queijo requeijão cremoso",
    calorias: "257",
    proteina: "9,6",
    colesterol: "74",
    carboidrato: "2,4",
    fibra: "NA"
  },
  {
    alimento: "Queijo ricota",
    calorias: "140",
    proteina: "12,6",
    colesterol: "49",
    carboidrato: "3,8",
    fibra: "NA"
  },
  {
    alimento: "Bebida isotônica sabores variados",
    calorias: "26",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "6,4",
    fibra: "NA"
  },
  {
    alimento: "Café infusão 10%",
    calorias: "9",
    proteina: "0,7",
    colesterol: "NA",
    carboidrato: "1,5",
    fibra: "NA"
  },
  {
    alimento: "Cana aguardente 1",
    calorias: "216",
    proteina: "",
    colesterol: "NA",
    carboidrato: "*",
    fibra: "NA"
  },
  {
    alimento: "Cana caldo de",
    calorias: "65",
    proteina: "Tr",
    colesterol: "NA",
    carboidrato: "18,2",
    fibra: "0,1"
  },
  {
    alimento: "Cerveja pilsen 2",
    calorias: "41",
    proteina: "0,6",
    colesterol: "NA",
    carboidrato: "3,3",
    fibra: "NA"
  },
  {
    alimento: "Chá erva-doce infusão 5%",
    calorias: "1",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "0,4",
    fibra: "NA"
  },
  {
    alimento: "Chá mate infusão 5%",
    calorias: "3",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "0,6",
    fibra: "NA"
  },
  {
    alimento: "Chá preto infusão 5%",
    calorias: "2",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "0,6",
    fibra: "NA"
  },
  {
    alimento: "Coco água de",
    calorias: "22",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "5,3",
    fibra: "0,1"
  },
  {
    alimento: "Refrigerante tipo água tônica",
    calorias: "31",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "8,0",
    fibra: "NA"
  },
  {
    alimento: "Refrigerante tipo cola",
    calorias: "34",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "8,7",
    fibra: "NA"
  },
  {
    alimento: "Refrigerante tipo guaraná",
    calorias: "39",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "10,0",
    fibra: "NA"
  },
  {
    alimento: "Refrigerante tipo laranja",
    calorias: "46",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "11,8",
    fibra: "NA"
  },
  {
    alimento: "Refrigerante tipo limão",
    calorias: "40",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "10,3",
    fibra: "NA"
  },
  {
    alimento: "Omelete de queijo",
    calorias: "268",
    proteina: "15,6",
    colesterol: "384",
    carboidrato: "0,4",
    fibra: "NA"
  },
  {
    alimento: "Ovo de codorna inteiro cru",
    calorias: "177",
    proteina: "13,7",
    colesterol: "568",
    carboidrato: "0,8",
    fibra: "NA"
  },
  {
    alimento: "Ovo de galinha clara cozida/10minutos",
    calorias: "59",
    proteina: "13,4",
    colesterol: "NA",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Ovo de galinha gema cozida/10minutos",
    calorias: "353",
    proteina: "15,9",
    colesterol: "1272",
    carboidrato: "1,6",
    fibra: "NA"
  },
  {
    alimento: "Ovo de galinha inteiro cozido/10minutos",
    calorias: "146",
    proteina: "13,3",
    colesterol: "397",
    carboidrato: "0,6",
    fibra: "NA"
  },
  {
    alimento: "Ovo de galinha inteiro cru",
    calorias: "143",
    proteina: "13,0",
    colesterol: "356",
    carboidrato: "1,6",
    fibra: "NA"
  },
  {
    alimento: "Ovo de galinha inteiro frito",
    calorias: "240",
    proteina: "15,6",
    colesterol: "516",
    carboidrato: "1,2",
    fibra: "NA"
  },
  {
    alimento: "Achocolatado pó",
    calorias: "401",
    proteina: "4,2",
    colesterol: "Tr",
    carboidrato: "91,2",
    fibra: "3,9"
  },
  {
    alimento: "Açúcar cristal",
    calorias: "387",
    proteina: "0,3",
    colesterol: "NA",
    carboidrato: "99,6",
    fibra: "NA"
  },
  {
    alimento: "Açúcar mascavo",
    calorias: "369",
    proteina: "0,8",
    colesterol: "NA",
    carboidrato: "94,5",
    fibra: "NA"
  },
  {
    alimento: "Açúcar refinado",
    calorias: "387",
    proteina: "0,3",
    colesterol: "NA",
    carboidrato: "99,5",
    fibra: "NA"
  },
  {
    alimento: "Chocolate ao leite",
    calorias: "540",
    proteina: "7,2",
    colesterol: "17",
    carboidrato: "59,6",
    fibra: "2,2"
  },
  {
    alimento: "Chocolate ao leite com castanha do Pará",
    calorias: "559",
    proteina: "7,4",
    colesterol: "16",
    carboidrato: "55,4",
    fibra: "2,5"
  },
  {
    alimento: "Chocolate ao leite dietético",
    calorias: "557",
    proteina: "6,9",
    colesterol: "13",
    carboidrato: "56,3",
    fibra: "2,8"
  },
  {
    alimento: "Chocolate meio amargo",
    calorias: "475",
    proteina: "4,9",
    colesterol: "2",
    carboidrato: "62,4",
    fibra: "4,9"
  },
  {
    alimento: "Cocada branca",
    calorias: "449",
    proteina: "1,1",
    colesterol: "NA",
    carboidrato: "81,4",
    fibra: "3,6"
  },
  {
    alimento: "Doce de abóbora cremoso",
    calorias: "199",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "54,6",
    fibra: "2,3"
  },
  {
    alimento: "Doce de leite cremoso",
    calorias: "306",
    proteina: "5,5",
    colesterol: "20",
    carboidrato: "59,5",
    fibra: "NA"
  },
  {
    alimento: "Geléia mocotó natural",
    calorias: "106",
    proteina: "2,1",
    colesterol: "Tr",
    carboidrato: "24,2",
    fibra: "NA"
  },
  {
    alimento: "Glicose de milho",
    calorias: "292",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "79,4",
    fibra: "NA"
  },
  {
    alimento: "Maria mole",
    calorias: "301",
    proteina: "3,8",
    colesterol: "NA",
    carboidrato: "73,6",
    fibra: "0,7"
  },
  {
    alimento: "Maria mole coco queimado",
    calorias: "307",
    proteina: "3,9",
    colesterol: "NA",
    carboidrato: "75,1",
    fibra: "0,6"
  },
  {
    alimento: "Marmelada",
    calorias: "257",
    proteina: "0,4",
    colesterol: "NA",
    carboidrato: "70,8",
    fibra: "4,1"
  },
  {
    alimento: "Mel de abelha",
    calorias: "309",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "84,0",
    fibra: "NA"
  },
  {
    alimento: "Melado",
    calorias: "297",
    proteina: "0,0",
    colesterol: "NA",
    carboidrato: "76,6",
    fibra: "NA"
  },
  {
    alimento: "Quindim",
    calorias: "411",
    proteina: "4,7",
    colesterol: "271",
    carboidrato: "46,3",
    fibra: "3,2"
  },
  {
    alimento: "Rapadura",
    calorias: "352",
    proteina: "1,0",
    colesterol: "NA",
    carboidrato: "90,8",
    fibra: "NA"
  },
  {
    alimento: "Café pó torrado",
    calorias: "419",
    proteina: "14,7",
    colesterol: "NA",
    carboidrato: "65,8",
    fibra: "51,2"
  },
  {
    alimento: "Capuccino pó",
    calorias: "417",
    proteina: "11,3",
    colesterol: "29",
    carboidrato: "73,6",
    fibra: "2,4"
  },
  {
    alimento: "Fermento em pó químico",
    calorias: "90",
    proteina: "0,5",
    colesterol: "NA",
    carboidrato: "43,9",
    fibra: "NA"
  },
  {
    alimento: "Fermento biológico levedura tablete",
    calorias: "90",
    proteina: "17,0",
    colesterol: "NA",
    carboidrato: "7,7",
    fibra: "4,2"
  },
  {
    alimento: "Gelatina sabores variados pó",
    calorias: "380",
    proteina: "8,9",
    colesterol: "NA",
    carboidrato: "89,2",
    fibra: "NA"
  },
  {
    alimento: "Sal dietético",
    calorias: "NA",
    proteina: "NA",
    colesterol: "NA",
    carboidrato: "NA",
    fibra: "NA"
  },
  {
    alimento: "Sal grosso",
    calorias: "NA",
    proteina: "NA",
    colesterol: "NA",
    carboidrato: "NA",
    fibra: "NA"
  },
  {
    alimento: "Shoyu",
    calorias: "61",
    proteina: "3,3",
    colesterol: "NA",
    carboidrato: "11,6",
    fibra: "NA"
  },
  {
    alimento: "Tempero a base de sal",
    calorias: "21",
    proteina: "2,7",
    colesterol: "NA",
    carboidrato: "2,1",
    fibra: "0,6"
  },
  {
    alimento: "Azeitona preta conserva",
    calorias: "194",
    proteina: "1,2",
    colesterol: "NA",
    carboidrato: "5,5",
    fibra: "4,6"
  },
  {
    alimento: "Azeitona verde conserva",
    calorias: "137",
    proteina: "0,9",
    colesterol: "NA",
    carboidrato: "4,1",
    fibra: "3,8"
  },
  {
    alimento: "Chantilly spray com gordura vegetal",
    calorias: "315",
    proteina: "0,5",
    colesterol: "Tr",
    carboidrato: "16,9",
    fibra: "NA"
  },
  {
    alimento: "Leite de coco",
    calorias: "166",
    proteina: "1,0",
    colesterol: "NA",
    carboidrato: "2,2",
    fibra: "0,7"
  },
  {
    alimento: "Maionese tradicional com ovos",
    calorias: "302",
    proteina: "0,6",
    colesterol: "42",
    carboidrato: "7,9",
    fibra: "NA"
  },
  {
    alimento: "Acarajé",
    calorias: "289",
    proteina: "8,3",
    colesterol: "25",
    carboidrato: "19,1",
    fibra: "9,4"
  },
  {
    alimento: "Arroz carreteiro",
    calorias: "154",
    proteina: "10,8",
    colesterol: "36",
    carboidrato: "11,6",
    fibra: "1,5"
  },
  {
    alimento: "Baião de dois arroz e feijão-de-corda",
    calorias: "136",
    proteina: "6,2",
    colesterol: "4",
    carboidrato: "20,4",
    fibra: "5,1"
  },
  {
    alimento: "Barreado",
    calorias: "165",
    proteina: "18,3",
    colesterol: "60",
    carboidrato: "0,2",
    fibra: "0,1"
  },
  {
    alimento: "Bife à cavalo com contra filé",
    calorias: "291",
    proteina: "23,7",
    colesterol: "257",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Bolinho de arroz",
    calorias: "274",
    proteina: "8,0",
    colesterol: "70",
    carboidrato: "41,7",
    fibra: "2,7"
  },
  {
    alimento: "Camarão à baiana",
    calorias: "101",
    proteina: "7,9",
    colesterol: "117",
    carboidrato: "3,2",
    fibra: "0,4"
  },
  {
    alimento: "Charuto de repolho",
    calorias: "78",
    proteina: "6,8",
    colesterol: "21",
    carboidrato: "10,1",
    fibra: "1,5"
  },
  {
    alimento: "Cuscuz de milho cozido com sal",
    calorias: "113",
    proteina: "2,2",
    colesterol: "NA",
    carboidrato: "25,3",
    fibra: "2,1"
  },
  {
    alimento: "Cuscuz paulista",
    calorias: "142",
    proteina: "2,6",
    colesterol: "15",
    carboidrato: "22,5",
    fibra: "2,4"
  },
  {
    alimento: "Cuxá molho",
    calorias: "80",
    proteina: "5,6",
    colesterol: "58",
    carboidrato: "5,7",
    fibra: "3,0"
  },
  {
    alimento: "Dobradinha",
    calorias: "125",
    proteina: "19,8",
    colesterol: "144",
    carboidrato: "0,0",
    fibra: "NA"
  },
  {
    alimento: "Estrogonofe de carne",
    calorias: "173",
    proteina: "15,0",
    colesterol: "66",
    carboidrato: "3,0",
    fibra: "NA"
  },
  {
    alimento: "Estrogonofe de frango",
    calorias: "157",
    proteina: "17,6",
    colesterol: "80",
    carboidrato: "2,6",
    fibra: "NA"
  },
  {
    alimento: "Feijão tropeiro mineiro",
    calorias: "152",
    proteina: "10,2",
    colesterol: "68",
    carboidrato: "19,6",
    fibra: "3,6"
  },
  {
    alimento: "Feijoada",
    calorias: "117",
    proteina: "8,7",
    colesterol: "22",
    carboidrato: "11,6",
    fibra: "5,1"
  },
  {
    alimento: "Frango com açafrão",
    calorias: "113",
    proteina: "9,7",
    colesterol: "50",
    carboidrato: "4,1",
    fibra: "0,2"
  },
  {
    alimento: "Macarrão molho bolognesa",
    calorias: "120",
    proteina: "4,9",
    colesterol: "7",
    carboidrato: "22,5",
    fibra: "0,8"
  },
  {
    alimento: "Maniçoba",
    calorias: "134",
    proteina: "10,0",
    colesterol: "43",
    carboidrato: "3,4",
    fibra: "2,2"
  },
  {
    alimento: "Quibebe",
    calorias: "86",
    proteina: "8,6",
    colesterol: "NA",
    carboidrato: "6,6",
    fibra: "1,7"
  },
  {
    alimento: "Salada de legumes com maionese",
    calorias: "96",
    proteina: "1,1",
    colesterol: "7",
    carboidrato: "8,9",
    fibra: "2,2"
  },
  {
    alimento: "Salada de legumes cozida no vapor",
    calorias: "35",
    proteina: "2,0",
    colesterol: "NA",
    carboidrato: "7,1",
    fibra: "2,5"
  },
  {
    alimento: "Salpicão de frango",
    calorias: "148",
    proteina: "13,9",
    colesterol: "53",
    carboidrato: "4,6",
    fibra: "0,4"
  },
  {
    alimento: "Sarapatel",
    calorias: "123",
    proteina: "18,5",
    colesterol: "315",
    carboidrato: "1,1",
    fibra: "*"
  },
  {
    alimento: "Tabule",
    calorias: "57",
    proteina: "2,0",
    colesterol: "NA",
    carboidrato: "10,6",
    fibra: "2,1"
  },
  {
    alimento: "Tacacá",
    calorias: "47",
    proteina: "7,0",
    colesterol: "71",
    carboidrato: "3,4",
    fibra: "0,2"
  },
  {
    alimento: "Tapioca com manteiga",
    calorias: "348",
    proteina: "0,1",
    colesterol: "31",
    carboidrato: "63,6",
    fibra: "Tr"
  },
  {
    alimento: "Tucupi com pimenta-de-cheiro",
    calorias: "27",
    proteina: "2,1",
    colesterol: "NA",
    carboidrato: "4,7",
    fibra: "0,2"
  },
  {
    alimento: "Vaca atolada",
    calorias: "145",
    proteina: "5,1",
    colesterol: "19",
    carboidrato: "10,1",
    fibra: "2,3"
  },
  {
    alimento: "Vatapá",
    calorias: "255",
    proteina: "6,0",
    colesterol: "44",
    carboidrato: "9,7",
    fibra: "1,7"
  },
  {
    alimento: "Virado à paulista",
    calorias: "307",
    proteina: "10,2",
    colesterol: "66",
    carboidrato: "14,1",
    fibra: "2,2"
  },
  {
    alimento: "Yakisoba",
    calorias: "113",
    proteina: "7,5",
    colesterol: "NA",
    carboidrato: "18,3",
    fibra: "1,1"
  },
  {
    alimento: "Amendoim grão cru",
    calorias: "544",
    proteina: "27,2",
    colesterol: "NA",
    carboidrato: "20,3",
    fibra: "8,0"
  },
  {
    alimento: "Amendoim torrado salgado",
    calorias: "606",
    proteina: "22,5",
    colesterol: "NA",
    carboidrato: "18,7",
    fibra: "7,8"
  },
  {
    alimento: "Ervilha em vagem",
    calorias: "88",
    proteina: "7,5",
    colesterol: "NA",
    carboidrato: "14,2",
    fibra: "9,7"
  },
  {
    alimento: "Ervilha enlatada drenada",
    calorias: "74",
    proteina: "4,6",
    colesterol: "NA",
    carboidrato: "13,4",
    fibra: "5,1"
  },
  {
    alimento: "Feijão carioca cozido",
    calorias: "76",
    proteina: "4,8",
    colesterol: "NA",
    carboidrato: "13,6",
    fibra: "8,5"
  },
  {
    alimento: "Feijão carioca cru",
    calorias: "329",
    proteina: "20,0",
    colesterol: "NA",
    carboidrato: "61,2",
    fibra: "18,4"
  },
  {
    alimento: "Feijão fradinho cozido",
    calorias: "78",
    proteina: "5,1",
    colesterol: "NA",
    carboidrato: "13,5",
    fibra: "7,5"
  },
  {
    alimento: "Feijão fradinho cru",
    calorias: "339",
    proteina: "20,2",
    colesterol: "NA",
    carboidrato: "61,2",
    fibra: "23,6"
  },
  {
    alimento: "Feijão jalo cozido",
    calorias: "93",
    proteina: "6,1",
    colesterol: "NA",
    carboidrato: "16,5",
    fibra: "13,9"
  },
  {
    alimento: "Feijão jalo cru",
    calorias: "328",
    proteina: "20,1",
    colesterol: "NA",
    carboidrato: "61,5",
    fibra: "30,3"
  },
  {
    alimento: "Feijão preto cozido",
    calorias: "77",
    proteina: "4,5",
    colesterol: "NA",
    carboidrato: "14,0",
    fibra: "8,4"
  },
  {
    alimento: "Feijão preto cru",
    calorias: "324",
    proteina: "21,3",
    colesterol: "NA",
    carboidrato: "58,8",
    fibra: "21,8"
  },
  {
    alimento: "Feijão rajado cozido",
    calorias: "85",
    proteina: "5,5",
    colesterol: "NA",
    carboidrato: "15,3",
    fibra: "9,3"
  },
  {
    alimento: "Feijão rajado cru",
    calorias: "326",
    proteina: "17,3",
    colesterol: "NA",
    carboidrato: "62,9",
    fibra: "24,0"
  },
  {
    alimento: "Feijão rosinha cozido",
    calorias: "68",
    proteina: "4,5",
    colesterol: "NA",
    carboidrato: "11,8",
    fibra: "4,8"
  },
  {
    alimento: "Feijão rosinha cru",
    calorias: "337",
    proteina: "20,9",
    colesterol: "NA",
    carboidrato: "62,2",
    fibra: "20,6"
  },
  {
    alimento: "Feijão roxo cozido",
    calorias: "77",
    proteina: "5,7",
    colesterol: "NA",
    carboidrato: "12,9",
    fibra: "11,5"
  },
  {
    alimento: "Feijão roxo cru",
    calorias: "331",
    proteina: "22,2",
    colesterol: "NA",
    carboidrato: "60,0",
    fibra: "33,8"
  },
  {
    alimento: "Grão-de-bico cru",
    calorias: "355",
    proteina: "21,2",
    colesterol: "NA",
    carboidrato: "57,9",
    fibra: "12,4"
  },
  {
    alimento: "Guandu cru",
    calorias: "344",
    proteina: "19,0",
    colesterol: "NA",
    carboidrato: "64,0",
    fibra: "21,3"
  },
  {
    alimento: "Lentilha cozida",
    calorias: "93",
    proteina: "6,3",
    colesterol: "NA",
    carboidrato: "16,3",
    fibra: "7,9"
  },
  {
    alimento: "Lentilha crua",
    calorias: "339",
    proteina: "23,2",
    colesterol: "NA",
    carboidrato: "62,0",
    fibra: "16,9"
  },
  {
    alimento: "Paçoca amendoim",
    calorias: "487",
    proteina: "16,0",
    colesterol: "NA",
    carboidrato: "52,4",
    fibra: "7,3"
  },
  {
    alimento: "Pé-de-moleque amendoim",
    calorias: "503",
    proteina: "13,2",
    colesterol: "NA",
    carboidrato: "54,7",
    fibra: "3,4"
  },
  {
    alimento: "Soja farinha",
    calorias: "404",
    proteina: "36,0",
    colesterol: "NA",
    carboidrato: "38,4",
    fibra: "20,2"
  },
  {
    alimento: "Soja extrato solúvel natural fluido",
    calorias: "39",
    proteina: "2,4",
    colesterol: "NA",
    carboidrato: "4,3",
    fibra: "0,4"
  },
  {
    alimento: "Soja extrato solúvel pó",
    calorias: "459",
    proteina: "35,7",
    colesterol: "NA",
    carboidrato: "28,5",
    fibra: "7,3"
  },
  {
    alimento: "Soja queijo (tofu)",
    calorias: "64",
    proteina: "6,6",
    colesterol: "NA",
    carboidrato: "2,1",
    fibra: "0,8"
  },
  {
    alimento: "Tremoço cru",
    calorias: "381",
    proteina: "33,6",
    colesterol: "NA",
    carboidrato: "43,8",
    fibra: "32,3"
  },
  {
    alimento: "Tremoço em conserva",
    calorias: "121",
    proteina: "11,1",
    colesterol: "NA",
    carboidrato: "12,4",
    fibra: "14,4"
  },
  {
    alimento: "Amêndoa torrada salgada",
    calorias: "581",
    proteina: "18,6",
    colesterol: "NA",
    carboidrato: "29,5",
    fibra: "11,6"
  },
  {
    alimento: "Castanha-de-caju torrada salgada",
    calorias: "570",
    proteina: "18,5",
    colesterol: "NA",
    carboidrato: "29,1",
    fibra: "3,7"
  },
  {
    alimento: "Castanha-do-Brasil crua",
    calorias: "643",
    proteina: "14,5",
    colesterol: "NA",
    carboidrato: "15,1",
    fibra: "7,9"
  },
  {
    alimento: "Coco cru",
    calorias: "406",
    proteina: "3,7",
    colesterol: "NA",
    carboidrato: "10,4",
    fibra: "5,4"
  },
  {
    alimento: "Coco  verde cru",
    calorias: "*",
    proteina: "*",
    colesterol: "*",
    carboidrato: "*",
    fibra: "*"
  },
  {
    alimento: "Farinha de mesocarpo de babaçu crua",
    calorias: "329",
    proteina: "1,4",
    colesterol: "NA",
    carboidrato: "79,2",
    fibra: "17,9"
  },
  {
    alimento: "Gergelim semente",
    calorias: "584",
    proteina: "21,2",
    colesterol: "NA",
    carboidrato: "21,6",
    fibra: "11,9"
  },
  {
    alimento: "Linhaça semente",
    calorias: "495",
    proteina: "14,1",
    colesterol: "NA",
    carboidrato: "43,3",
    fibra: "33,5"
  },
  {
    alimento: "Pinhão cozido",
    calorias: "174",
    proteina: "3,0",
    colesterol: "NA",
    carboidrato: "43,9",
    fibra: "15,6"
  },
  {
    alimento: "Pupunha cozida",
    calorias: "219",
    proteina: "2,5",
    colesterol: "NA",
    carboidrato: "29,6",
    fibra: "4,3"
  },
  {
    alimento: "Noz crua",
    calorias: "620",
    proteina: "14,0",
    colesterol: "NA",
    carboidrato: "18,4",
    fibra: "7,2"
  },
];

app.get('/foods', (request, response)=> {
  // Parâmetro de pesquisa
  const {title} = request.query;

    // Verifica se na lista tem o alimento
    let itens = listFoods.filter((element) => {
        return element.alimento.includes(title);
    })
    
  // retorno com a lista dos alimentros encontrados
   return response.json(
        itens
    )
})

app.listen(PORT, ()=> {
    console.log('Escutando na porta: '+ PORT);
})