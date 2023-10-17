
function clearDataDisplay() {
    $('#data-display').empty();
}

let data = {
    players: [
        { name: 'Doom Slayer', skillLevel: 90, weapon: 'BFG' },
        { name: 'Imp', skillLevel: 60, weapon: 'Fireball' },
        { name: 'Hell Knight', skillLevel: 75, weapon: 'Mace' },
        { name: 'Dragonborn', skillLevel: 63, weapon: 'Fireball' },
        { name: 'ElderRing', skillLevel: 24, weapon: 'Mace' },
    ],
};

function displayData() {
    clearDataDisplay();
    $('#data-display').html(JSON.stringify(data, null, 2));
}


function clearData() {
    data.players = [];
    displayData();
}

$('#button1').click(() => {
    data.players = _.sortBy(data.players, 'skillLevel');
    displayData();
});


$('#button2').click(() => {
    data.players = _.reverse(data.players);
    displayData();
});


$('#button3').click(() => {
    data.players = _.filter(data.players, (player) => player.skillLevel > 50);
    displayData();
});


$('#button4').click(() => {
    const bestPlayer = _.maxBy(data.players, 'skillLevel');
    clearDataDisplay();
    $('#data-display').html(`Best Player: ${bestPlayer.name} (Skill Level: ${bestPlayer.skillLevel})`);
});


$('#button5').click(() => {
    const groupedData = _.groupBy(data.players, 'weapon');
    clearDataDisplay();
    $('#data-display').html(JSON.stringify(groupedData, null, 2));
});


$('#button6').click(() => {
    data.players = _.shuffle(data.players);
    displayData();
});


$('#button7').click(() => {
    const count = _.size(data.players);
    clearDataDisplay();
    $('#data-display').html(`Total Players: ${count}`);
});


$('#button8').click(() => {
    const totalSkillLevel = _.sumBy(data.players, 'skillLevel');
    clearDataDisplay();
    $('#data-display').html(`Total Skill Level: ${totalSkillLevel}`);
});


$('#button9').click(() => {
    const rookiePlayer = _.minBy(data.players, 'skillLevel');
    clearDataDisplay();
    $('#data-display').html(`Rookie Player: ${rookiePlayer.name} (Skill Level: ${rookiePlayer.skillLevel})`);
});

$('#button10').click(() => {
    data.players.push({ name: 'New Player', skillLevel: 40, weapon: 'Shotgun' });
    displayData();
});




displayData();


