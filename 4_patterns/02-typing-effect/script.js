gsap.registerPlugin(TextPlugin);

gsap.to("#typing", {
    duration: 2.5,
    text: "HELLO, I'M YOON",
    ease: "none",
});

/*
0초:    ""
0.3초:  "HE"
0.6초:  "HELLO"
1.2초:  "HELLO, I'"
...
2.5초:  "HELLO, I'M YOON" (완성)
*/