import React from 'react';
import './PostActions.css'

export const PostActions = props => {
    return (
    <div className="post_action_wrapper">
        <img 
        className="action_icons" 
        onClick={props.incrementLike}
        id="heart" 
        src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2IDE2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTQuMDI5LDkuODc3YzAuMjQ4LDAuMjQyLDAuNDgsMC40NjksMC42NzYsMC42NzljMC42NzUsMC43MjMsMS4zOTEsMS4zNzEsMi4wODMsMS45OThjMC4yNjcsMC4yNDEsMC41MzQsMC40ODMsMC44LDAuNzMxICBjMC4wMjQsMC4wMzEsMC4wNTIsMC4wNiwwLjA4MywwLjA4NGMwLjA5NSwwLjA3NiwwLjIxNCwwLjExNSwwLjMzMiwwLjExNWMwLjEzOCwwLDAuMjc0LTAuMDUyLDAuMzctMC4xNTggIGMwLjAwNi0wLjAwNywwLjAxMi0wLjAxNCwwLjAxOC0wLjAyMWMxLjQxOS0wLjk3LDIuODAyLTIuMjI5LDQuMzQtMy45NDdjMC44OTMtMC45OTksMS43LTIsMS43NjctMy4yNzQgIGMwLjA4MS0xLjU0Mi0xLjExNC0zLjA0Mi0yLjcyMS0zLjQxM2MtMS4xMDQtMC4yNTMtMi4zNDQsMC4yNTItMy43MDIsMS41MDVDNy40MTcsMy40MDIsNi4yNDcsMi41MzksNS4zOTYsMi41MTEgIGMtMS4yNDQtMC4wMzQtMi40NTksMC41MjgtMy4yMzksMS41MkMwLjM3MSw2LjMwNiwyLjU3Miw4LjQ1NSw0LjAyOSw5Ljg3N3ogTTIuOTQ0LDQuNjQ5YzAuNTU3LTAuNzA4LDEuNDQ0LTEuMTQsMi4zMzMtMS4xNCAgYzAuMDI5LDAsMC4wNTksMCwwLjA4OCwwLjAwMWMwLjU2LDAuMDE4LDEuODM1LDAuOTg0LDIuMiwxLjY2N2MwLjA3NSwwLjE0LDAuMjEyLDAuMjM2LDAuMzcsMC4yNTkgIEM4LjA5Myw1LjQ2LDguMjUxLDUuNDA1LDguMzYyLDUuMjkxYzAuODY5LTAuODg2LDIuMTIyLTEuODk2LDMuMTg5LTEuNjQ1YzEuMTI5LDAuMjYxLDIuMDAzLDEuMzMxLDEuOTQ3LDIuMzg1ICBjLTAuMDUsMC45NTEtMC43MTUsMS43NjctMS41MTMsMi42NmMtMS40MDcsMS41NzItMi42NzIsMi43NC0zLjk1MiwzLjY0NGMtMC4xOTItMC4xNzYtMC4zODMtMC4zNDktMC41NzUtMC41MjIgIGMtMC43MDgtMC42NDEtMS4zNzYtMS4yNDYtMi4wMjItMS45MzhjLTAuMjA1LTAuMjItMC40NDktMC40NTgtMC43MDktMC43MTJDMy4wMTksNy40OTQsMS44MDMsNi4xMDIsMi45NDQsNC42NDl6Ij48L3BhdGg+PC9zdmc+"
        />
        <img 
        className="action_icons" 
        id="comment" 
        src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHg9IjBweCIgeT0iMHB4Ij48dGl0bGU+VW50aXRsZWQtMjwvdGl0bGU+PHBhdGggZD0iTTE1Ni4yOCw1MTJoLTAuMDljLTEzLjc5LDAtMjYtNi44Mi0zMi42NS0xOC4yNC0xMS4zNC0xOS4zNC0yLjItNDEuMTMsOC4yNC01OS45MWExNjQuMTUsMTY0LjE1LDAsMCwwLDE4LjUtNTMuNjFDMTA5LjcxLDM2NS43LDc1LDM0My4xLDQ5LjE0LDMxNC4yNiwxOC44OSwyODAuNTEsMi44OSwyNDAuNzEsMi44OSwxOTkuMTZjMC0yNy41OSw3LTU0LjMxLDIwLjg3LTc5LjRDMzYuODgsOTYsNTUuNTEsNzQuNzUsNzkuMTUsNTYuNiwxMjYuNywyMC4xLDE4OS41LDAsMjU2LDBTMzg1LjMxLDIwLjExLDQzMi44NSw1Ni42MkM0NTYuNDksNzQuNzcsNDc1LjEyLDk2LDQ4OC4yMywxMTkuOGMxMy44NSwyNS4xMSwyMC44Nyw1MS44NCwyMC44Nyw3OS40NSwwLDQyLjc2LTE2LjgxLDgzLjQ3LTQ4LjYyLDExNy43My0yOS44NywzMi4xNy03MC43OSw1Ni4xOS0xMTguNTgsNjkuNjUtNjAuODQsNTEuNzYtMTA3LjE4LDg3LjY2LTEzNy43NiwxMDYuNzJDMTc2LjUxLDUxMC41NiwxNjUsNTEyLDE1Ni4yOCw1MTJaTTI1Niw0MS4zNmMtNTcuNDQsMC0xMTEuMywxNy4wNy0xNTEuNjYsNDguMDUtMzguNzUsMjkuNzUtNjAuMDgsNjguNzItNjAuMDgsMTA5Ljc1LDAsNjQuMjIsNTMuOTQsMTIzLjIxLDEzNC4yMiwxNDYuNzhsMTUuODEsNC42NC0xLDE2LjQ1YTIwNS41OCwyMDUuNTgsMCwwLDEtMjUuMzYsODYuOTEsOTIuODgsOTIuODgsMCwwLDAtNy4zMywxNS43MmMxMS41MS00LDQ4LjE4LTIzLjgzLDE1OC0xMTcuNWwzLjU4LTMuMDUsNC41NS0xLjJjODQuMzYtMjIuMzUsMTQxLTgyLjA5LDE0MS0xNDguNjYsMC00MS4wNy0yMS4zNC04MC4wNy02MC4wOS0xMDkuODNDMzY3LjMxLDU4LjQzLDMxMy40NSw0MS4zNiwyNTYsNDEuMzZaIj48L3BhdGg+PC9zdmc+" alt="" 
        />
    </div>
)}


