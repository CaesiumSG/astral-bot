module.exports = {
    name: "ask",
    cooldown: 3,
    description: ":)",
    usage: '[question]',
    execute(message) {
        const answers = [
            "I guess",
            "ask me later",
            "no", 
            "yes", 
            "..."
        ]
        const answer = answers[Math.floor(Math.random() * answers.length)];
        message.channel.send('loading answer...')
.then((msg)=> {
  setTimeout(function(){
    msg.edit(answer);
  }, 4000)
}); 
    }
}