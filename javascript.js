/** ============================================
  *     Comments
  * ============================================ */

// Comment
// serenade.language("javascript").snippet(
//     "add comment <%comment%>",
//     "// <%comment%>",
//     { "comment": ['capital', 'lowercase'] },
//     "inline"
// );

// Comment Header
serenade.language("javascript").snippet(
    "add comment header <%comment%>",
    "<%newline%>/** ============================================<%newline%>  *<%indent%> <%comment%><%newline%>  * ============================================ */<%newline%>",
    { "comment": ['capital', 'lowercase'] },
    "inline"
);

/** ============================================
  *   Serenade
  * ============================================ */

// newline
serenade.language("javascript").snippet(
    "insert template new line",
    "<%newline%>",
);

// indent
serenade.language("javascript").snippet(
    "insert template indent",
    "<%indent%>",
);

// anything else
serenade.language("javascript").snippet(
    "insert template <%identifier%>",
    "\<\%<%identifier%>\%\>",
    { "identifier": ['underscores'] },
    "inline"
);

// Create a custom global command
serenade.language("javascript").snippet(
    "add command <%identifier%>",
    "serenade.global().command(\"<%identifier%>\", api => {<%newline%><%indent%><%newline%>});",
);

// Create a custom app command
serenade.language("javascript").snippet(
    "add command <%identifier%> for <%application%>",
    "serenade.app(\"<%application%>\").command(\"<%identifier%>\", api => {<%newline%><%indent%><%newline%>});",
);

// Create a custom language snippet
serenade.language("javascript").snippet(
    "add snippet <%identifier%> for <%language%>",
    "serenade.language(\"<%language%>\").snippet(<%newline%><%indent%>\"<%identifier%>\",<%newline%><%indent%><%newline%>);",
);