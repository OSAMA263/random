$(function () {
  const body = $("body");
  const div = $(".div");
  const input = $("input");
  const container = $(".container");
  const btn = $("button");
  const child = $(".child");

  body.css("background-color", "gray");
  div.css("opacity", "0");
  btn.attr("style", "color:yellow;background-color:black");
  btn.on("click", () => {
    div
      .each((i, d) =>
        $(d).css(
          {
            opacity: `+=${0.1 * (i + 1)}`,
            color: i === 0 ? "yellow" : i === 1 ? "red" : "blue",
          },
          1100
        )
      )
      .slideUp(600, () => div.css("color", "white"))
      .slideDown(600);

    // callback fn that runs after the animatation duration is finished
    //show,fade,slide,stop,animate({top:4px,})
  });

  // get -set
  container.html(); //tags elements
  // container.text("new text bruv"); //conly text
  input.val("default");
  input.on("keyup", ({ target }) => {
    container.text(target.value);
  });
  input.attr("id", "input-id");
  // remove(),empty(),toggleClass,
  //append ,prepend //add text after || before the content div
  // after,before //add text after || before the div tage
  //----------------
  /*
parent,parents("custom"),parentsUntill('custom')
children(),find("grandchildrens")
siblings,next,prev,next||prevAll,next||prevUntill
first("p"),last,eq(index),filter(".test"),not("div")
 */
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1", // Example API endpoint
    method: "GET",
    data: { format: "json" },
    success: function (data) {
      console.log("Data received:", data);
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
    },
  });
});
