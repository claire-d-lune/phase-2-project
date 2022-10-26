import React from "react";

//Cups as template, find and replace to replicate for other suits. all imports completed relatively painlessly. 
const cups2 = require("./cups2.jpg")
const cups3 = require("./cups3.jpg")
const cups4 = require("./cups4.jpg")
const cups5 = require("./cups5.jpg")
const cups6 = require("./cups6.jpg")
const cups7 = require("./cups7.jpg")
const cups8 = require("./cups3.jpg")
const cups9 = require("./cups9.jpg")
const cups10 = require("./cups10.jpg")
const cupsAce = require("./cupsAce.jpg")
const cupsKing = require("./cupsKing.jpg")
const cupsKnight = require("./cupsKnight.jpg")
const cupsPage = require("./cupsPage.jpg")
const cupsQueen = require("./cupsQueen.jpg")


// I need to comment out the remaining imports for now, since I haven't moved the images to this folder yet.

const swords2 = require("./swords2.jpg")
const swords3 = require("./swords3.jpg")
const swords4 = require("./swords4.jpg")
const swords5 = require("./swords5.jpg")
const swords6 = require("./swords6.jpg")
const swords7 = require("./swords7.jpg")
const swords8 = require("./swords3.jpg")
const swords9 = require("./swords9.jpg")
const swords10 = require("./swords10.jpg")
const swordsAce = require("./swordsAce.jpg")
const swordsKing = require("./swordsKing.jpg")
const swordsKnight = require("./swordsKnight.jpg")
const swordsPage = require("./swordsPage.jpg")
const swordsQueen = require("./swordsQueen.jpg")

const pents2 = require("./pents2.jpg")
const pents3 = require("./pents3.jpg")
const pents4 = require("./pents4.jpg")
const pents5 = require("./pents5.jpg")
const pents6 = require("./pents6.jpg")
const pents7 = require("./pents7.jpg")
const pents8 = require("./pents3.jpg")
const pents9 = require("./pents9.jpg")
const pents10 = require("./pents10.jpg")
const pentsAce = require("./pentsAce.jpg")
const pentsKing = require("./pentsKing.jpg")
const pentsKnight = require("./pentsKnight.jpg")
const pentsPage = require("./pentsPage.jpg")
const pentsQueen = require("./pentsQueen.jpg")

const wands2 = require("./wands2.jpg")
const wands3 = require("./wands3.jpg")
const wands4 = require("./wands4.jpg")
const wands5 = require("./wands5.jpg")
const wands6 = require("./wands6.jpg")
const wands7 = require("./wands7.jpg")
const wands8 = require("./wands3.jpg")
const wands9 = require("./wands9.jpg")
const wands10 = require("./wands10.jpg")
const wandsAce = require("./wandsAce.jpg")
const wandsKing = require("./wandsKing.jpg")
const wandsKnight = require("./wandsKnight.jpg")
const wandsPage = require("./wandsPage.jpg")
const wandsQueen = require("./wandsQueen.jpg")


//Major Arcana:

const chariot = require("./chariot.jpg")
const death = require("./death.jpg")
const devil = require("./devil.jpg")
const emperor = require("./emperor.jpg")
const empress = require("./empress.jpg")
const fool = require("./fool.jpg")
const hangedMan = require("./hangedMan.jpg")
const hermit = require("./hermit.jpg")
const hierophant = require("./hierophant.jpg")
const highPriestess = require("./highPriestess.jpg")
const judgement = require("./judgement.jpg")
const justice = require("./justice.jpg")
const lovers = require("./lovers.jpg")
const magician = require("./magician.jpg")
const moon = require("./moon.jpg")
const star = require("./star.jpg")
const strength = require("./strength.jpg")
const sun = require("./sun.jpg")
const temperance = require("./temperance.jpg")
const tower = require("./tower.jpg")
const wheel = require("./wheel.jpg")
const world = require("./world.jpg")



 //I think I'll export these as an array, mostly to avoid having too many imports in the card file,
 //which would make it a mess. but as a side-benefit,for the simplest iteration to display them 
 //I won't decide until tomorrow, but an object with indices is probably better for sources. I can use the short name of the card as indices. 

 

 //I went ahead and created an array of the short_names for each card. 
 //Hopefully I'm going to use these as indices that will point to the correct image to display, using the card's identity. 

 //
export const imageObject = {
    'ar01': magician,
    'ar02': highPriestess,
    'ar03': empress,
    'ar04': emperor,
    'ar05': hierophant,
    'ar06': lovers,
    'ar07': chariot,
    'ar08': strength,
    'ar09': hermit,
    'ar10': wheel,
    'ar11': justice,
    'ar12': hangedMan,
    'ar13': death,
    'ar14': temperance,
    'ar15': devil,
    'ar16': tower,
    'ar17': star,
    'ar18': moon,
    'ar19': sun,
    'ar20': judgement,
    'ar00': fool,
    'ar21': world, 
    
    'wapa': wandsPage, 
    'wakn': wandsKnight, 
    'waqu': wandsQueen, 
    'waki': wandsKing, 
    'waac': wandsAce, 
    'wa02': wands2, 
    'wa03': wands3, 
    'wa04': wands4, 
    'wa05': wands5, 
    'wa06': wands6, 
    'wa07': wands7, 
    'wa08': wands8, 
    'wa09': wands9, 
    'wa10': wands10, 
    
    'cupa': cupsPage, 
    'cukn': cupsKnight, 
    'cuqu': cupsQueen, 
    'cuki': cupsKing, 
    'cuac': cupsAce, 
    'cu02': cups2, 
    'cu03': cups3, 
    'cu04': cups4, 
    'cu05': cups5, 
    'cu06': cups6, 
    'cu07': cups7, 
    'cu08': cups8, 
    'cu09': cups9, 
    'cu10': cups10, 
    
    'pepa': pentsAce, 
    'pekn': pentsKnight, 
    'pequ': pentsQueen, 
    'peki': pentsKing, 
    'peac': pentsAce, 
    'pe02': pents2, 
    'pe03': pents3, 
    'pe04': pents4, 
    'pe05': pents5, 
    'pe06': pents6, 
    'pe07': pents7, 
    'pe08': pents8, 
    'pe09': pents9, 
    'pe10': pents10, 
    
    'swpa': swordsPage, 
    'swkn': swordsKnight, 
    'swqu': swordsQueen, 
    'swki': swordsKing, 
    'swac': swordsAce, 
    'sw02': swords2, 
    'sw03': swords3, 
    'sw04': swords4, 
    'sw05': swords5, 
    'sw06': swords6, 
    'sw07': swords7, 
    'sw08': swords8, 
    'sw09': swords9, 
    'sw10': swords10,
}

