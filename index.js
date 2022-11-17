import fs from 'fs';
import got from 'got';
import jsdom from "jsdom";
const { JSDOM } = jsdom;

const vgmUrl = 'https://www.lastmanstands.com/team-profile/t20/all-fixtures?teamid=10383';

var allDates = []
var allTimes = []
var teams = []
var venues = []

got(vgmUrl).then(response => {
  const dom = new JSDOM(response.body);
  dom.window.document.querySelectorAll('tr').forEach((fixture, index) => {
    if (index === 0) {
      return
    }

    allDates.push(fixture.querySelectorAll('td').item(0).textContent.split(" - ")[0])
    allTimes.push(fixture.querySelectorAll('td').item(0).textContent.split(" - ")[1])
    teams.push(fixture.querySelectorAll('td').item(1).textContent)
    venues.push(fixture.querySelectorAll('td').item(2).textContent)

    // console.log(fixture.querySelectorAll('td').item(0).textContent.split(" - "))
    // console.log(fixture.querySelectorAll('td').item(1).textContent)
    // console.log(fixture.querySelectorAll('td').item(2).textContent)
  });

  console.log(allDates)
  console.log(allTimes)
  console.log(teams)
  console.log(venues)


}).catch(err => {
  console.log(err);
});


