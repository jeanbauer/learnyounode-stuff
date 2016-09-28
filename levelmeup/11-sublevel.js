/*
#####################################################################
##                        ~~  Sublevel  ~~                         ##
#####################################################################
*/

const level = require('level');
const sub = require('level-sublevel');
const db = sub(level(process.argv[2]));

const robots = db.sublevel('robots');
robots.put('slogan', 'beep boop');

const dinosaurs = db.sublevel('dinosaurs');
dinosaurs.put('slogan', 'rawr');
