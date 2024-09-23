document.addEventListener("DOMContentLoaded", function() {
    const lines = [
        "Microsoft Windows [Version 10.0.22631.3880]",
        "(c) Microsoft Corporation. All rights reserved.",
        "",
        "C:\\Users\\cass> open -e websites.txt",
        "",
        "<u>┌  information websites: </u>",
        "├ <a href='https://syphia.li' target='_blank'>syphia.li</a>",
        "└ <a href='https://cass.li' target='_blank'>cass.li</a>",
        "",
        "<u>┌  experimental websites: </u>",
        "├ <a href='https://windows.cass.li' target='_blank'>windows.cass.li</a>",
        "└ <a href='https://images.syphia.li' target='_blank'>images.syphia.li</a>",
        "",
        "<u>┌  utility websites: </u>",
        "├ <a href='https://clock.cass.li' target='_blank'>clock.cass.li</a>",
        "└ <a href='https://timetable.cass.li' target='_blank'>timetable.cass.li</a>",
        "",
        "<u>┌  social websites: </u>",
        "├ <a href='https://www.instagram.com/casss.eu/' target='_blank'>instagram.com</a>",
        "├ <a href='https://open.spotify.com/artist/3sirhIjPRlrAt6SrTPrSou' target='_blank'>spotify.com (music)</a>",
        "├ <a href='https://open.spotify.com/user/31ulwdc3tcyolpnyft7qequvhip4' target='_blank'>spotify.com (playlists)</a>",
        "├ <a href='https://www.youtube.com/@syphia' target='_blank'>youtube.com</a>",
        "├ <a href='https://www.twitch.tv/syphialive' target='_blank'>twitch.tv</a>",
        "├ <a href='https://x.com/cassy_jpeg' target='_blank'>twitter.com</a>",
        "├ <a href='https://www.reddit.com/user/syphiareadstuff/' target='_blank'>reddit.com</a>",
        "├ <a href='https://www.tiktok.com/@casss.ch' target='_blank'>tiktok.comm</a>",
        "└ <a href='https://discord.gg/cdMTNpkhF7' target='_blank'>discord.com</a>",
        "",
        "<u>┌  emails: </u>",
        "├ <a href='mailto:cass@cass.li' target='_blank'>cass@cass.li</a>",
        "├ <a href='mailto:casss@autistici.org' target='_blank'>casss@autistici.org</a>",
        "├ <a href='mailto:cassss@abv.bg' target='_blank'>cassss@abv.bg</a>",
        "├ <a href='mailto:syphia@europe.com' target='_blank'>syphia@europe.com</a>",
        "├ <a href='mailto:syphia@usa.com' target='_blank'>syphia@usa.com</a>",
        "├ <a href='mailto:cass.ch@aol.com' target='_blank'>cass.ch@aol.com</a>",
        "├ <a href='mailto:casssch@mail.ru' target='_blank'>casssch@mail.ru</a>",
        "└ <a href='mailto:sussyrussy@vk.com' target='_blank'>sussyrussy@vk.com</a>",
        "",
        "<a><u><b><i> made by cass &copy; 2024 </i></b></u></a>"
    ];
    const typingSpeed = 10;
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = "";

    function typeText() {
        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                currentLine += lines[lineIndex].charAt(charIndex);
                document.getElementById('typed-text').innerHTML = currentLine.replace(/\n/g, '<br>');
                charIndex++;
                setTimeout(typeText, typingSpeed);
            } else {
                currentLine += '\n';
                document.getElementById('typed-text').innerHTML = currentLine.replace(/\n/g, '<br>');
                lineIndex++;
                charIndex = 0;
                setTimeout(typeText, typingSpeed);
            }
        }
    }

    typeText();
});
