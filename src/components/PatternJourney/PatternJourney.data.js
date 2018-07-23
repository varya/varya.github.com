const data = {
  "nodes": [
    {
      "id": 1,
      "text": "Empty entering node",
      "x": "0",
      "y": "-35",
      "width": 0,
      "height": 0
    },
    {
      "id": 10,
      "text": "Is the pattern in\nthe libtrary?",
      "color": "#00baf2",
      "x": "0",
      "y": "50",
      "info": `
        <p>
        You can search for patterns at the <i>Design System / Pattern Libarary website</i>.
        Figure out what could be a name or a keyword for the pattern you are looking for, and use if in the website search.
        </p>
        <p>
        If you don't find anything suitable, you can also ask other people in the
        <i>instant communication channels</i> like Slack / Flowdock / Mattermost etc.
        </p>
        `
    },
    {
      "id": 20,
      "text": "Does it fulfill\nall requirements?",
      "color": "#fcaf17",
      "width": 175,
      "x": "-325",
      "y": "125",
      "info": `
        <p>
        Study the pattern documentation at the
        <i>Design System / Pattern Library website</i>
        and all the examples provided. This way, you can understand if the pattern is suitable
        for your specific task.
        </p>
        <p>
        If there is no example covering your case, but you suppose that it is still possible
        without changing its code, play around with example HTML. For confirmation, ask in the
        people in communication channels (Slack, Flowdock, etc)
        if the pattern examples can be extended with your case. If they can, it would be nice if you
        make a pull request illustrating your specific usage.
        </p>
        `
    },
    {
      "id": 30,
      "text": "Anything similar\nat other projects?",
      "color": "#54bc7b",
      "width": 175,
      "x": "325",
      "y": "125",
      "info": `
        Ask around if people at other projects implement anything similar. You can instantly ask in the
        instant communication channels (Slack, Flowdock, etc)
        or raise this quesion in regular Design or Develoment meetings. Also, you can ask people directly.
        `
    },
    {
      "id": 40,
      "text": "Use it!",
      "color": "#54bc7b",
      "height": 40,
      "x": "-100",
      "y": "525",
      "info": `
        Your desired pattern is already a part of the Design System / Pattern Library. Check the
        <i>Design System / Pattern Library website</i>
        for its documentation.
        Use the component as it is documented. If you have question, do not hesitate to ask in the
        instant communication channels (Slack, Flowdock, etc).
        The suggestions and pull requests for the documentation improvement are very welcome.
        `
    },
    {
      "id": 50,
      "text": "Can it be changed to suit\n your new requirements while still\n fitting existing requirements?",
      "color": "#54bc7b",
      "width": 225,
      "height": 68,
      "x": "-150",
      "y": "200",
      "info": `
        <p>
        Figure out the requirements for the existing component based on the documentation and examples. If you have doubts, ask in the
        instant communication channels (Slack, Flowdock, etc), at regular meetings
        or in person.
        </p>
        <p>
        Does it look that you can provide changes and the component will not be broken in the places it is used now?
        </p>
        `
    },
    {
      "id": 60,
      "text": "Implement\n the pattern",
      "color": "#ff7f3f",
      "x": "-100",
      "y": "400",
      "info": `
        It seems that you need to add this pattern into the
        Design System / Pattern Library.
        To start with process, usually you need to create a ticket in the task tracker system
        (JIRA, Trello, etc) and/or communicate about what you are going to do directly to the people.
        Follow the workflow for implementing new patterns which usually includes task flow, communication standards and code style.
        `
    },
    {
      "id": 80,
      "text": "Can you take it as it is?",
      "color": "#fcaf17",
      "x": "175",
      "y": "200",
      "width": 175,
      "height": 36,
      "info": `
        Can you borrow the code of this component and use it without any change? So that both you and
        the "donor" project would be using the same code?
        `
    },
    {
      "id": 90,
      "text": "Do other teams ready to use\n new altered version?",
      "color": "#00baf2",
      "width": 200,
      "x": "50",
      "y": "300",
      "info": `
        If you change the existing component so that it meets your requirements,
        are the current users of it able to use the altered version?
        Ask them directly or raise this question publically. As usual,
        you can communicate in the
        communication channels (Slack, Flowdock, etc).
        `
    },
    {
      "id": 100,
      "text": "Can it be used by other\nprojects in the future",
      "color": "#ff7f3f",
      "width": 175,
      "x": "300",
      "y": "300",
      "info": `
        Is there future need for such component at other projects? Discuss this with the other teams, and
        do this publically in the
        communication channels (Slack, Flowdock, etc).
        You can also ask people directly or raise this question at regular cross-company Design or Development meetings.
        `
    },
    {
      "id": 110,
      "text": "Implement \nin your project",
      "color": "#767677",
      "width": 125,
      "x": "200",
      "y": "475",
      "info": `
        Looks like you need to implement the pattern in your own project, not as a part of the library.
        However, it still can be added into the library later once someone else will be looking for similar solution.
        `
    }
  ],
  "links": [
    {
      "from": 1,
      "to": 10,
      "text": "",
      "color": "#00a950",
      "offset": "0 0 0 -25"
    },
    {
      "from": 10,
      "to": 20,
      "text": "yes",
      "color": "#00a950",
      "offset": "0 -6 0 -25",
      "textOffset": "75 -15",
      "clockwise": "0"
    },
    {
      "from": 10,
      "to": 30,
      "text": "no",
      "color": "#ee4444",
      "offset": "0 -6 0 -25",
      "textOffset": "-75 -15",
      "clockwise": "1"
    },
    {
      "from": 20,
      "to": 40,
      "text": "yes",
      "color": "#00a950",
      "offset": "0 0 -75 -5",
      "textOffset": "-15 -225"
    },
    {
      "from": 20,
      "to": 50,
      "text": "no",
      "color": "#ee4444",
      "offset": "0 -6 0 -25",
      "textOffset": "10 -15",
      "clockwise": "1"
    },
    {
      "from": 50,
      "to": 60,
      "text": "yes",
      "color": "#00a950",
      "offset": "-60 0 -75 -5",
      "textOffset": "-15 -50"
    },
    {
      "from": 60,
      "to": 40,
      "text": "wait for\n release",
      "offset": "0 0 0 -25",
      "textOffset": "-13 5",
      "rotate": "-90",
      "color": "#00a950"
    },
    {
      "from": 30,
      "to": 80,
      "text": "yes",
      "color": "#00a950",
      "offset": "0 0 25 -25",
      "textOffset": "-25 -15",
      "clockwise": "0"
    },
    {
      "from": 80,
      "to": 60,
      "text": "yes",
      "color": "#00a950",
      "offset": "0 0 75 -10",
      "textOffset": "-5 -150"
    },
    {
      "from": 80,
      "to": 90,
      "text": "no",
      "color": "#ee4444",
      "offset": "-25 -5 -10 -25",
      "textOffset": "5 -15",
      "clockwise": "0"
    },
    {
      "from": 50,
      "to": 90,
      "text": "no",
      "color": "#ee4444",
      "offset": "0 -5 -30 -25",
      "textOffset": "10 -15",
      "clockwise": "1"
    },
    {
      "from": 90,
      "to": 60,
      "text": "yes",
      "color": "#00a950",
      "offset": "0 -5 0 -25",
      "textOffset": "-10 -15",
      "clockwise": "0"
    },
    {
      "from": 30,
      "to": 100,
      "text": "no",
      "color": "#ee4444",
      "offset": "20 0 45 -25",
      "textOffset": "10 -42"
    },
    {
      "from": 100,
      "to": 60,
      "text": "yes",
      "color": "#00a950",
      "offset": "-10 0 75 10",
      "textOffset": "90 -75"
    },
    {
      "from": 100,
      "to": 110,
      "text": "no",
      "color": "#ee4444",
      "offset": "10 0 65 -10",
      "textOffset": "15 -65"
    },
    {
      "from": 90,
      "to": 110,
      "text": "no",
      "color": "#ee4444",
      "offset": "25 0 -60 0",
      "textOffset": "15 -80"
    },
    {
      "from": 110,
      "to": 30,
      "text": "one day it will be there...",
      "color": "#e0e0e1",
      "offset": "0 10 80 25",
      "textOffset": "5 -25",
      "rotate": "-90",
      "clockwise": "0"
    }
  ]
}

export default data;
