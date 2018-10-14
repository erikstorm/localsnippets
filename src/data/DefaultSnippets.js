module.exports = [
  {
    id: '33e612d4-1f79-4380-9cb0-a38d129697b2',
    name: 'Async function in ES6',
    language: 'javascript',
    notes:
      'The async function declaration defines an asynchronous function, which returns an AsyncFunction object. An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.',
    text: `function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}
  
async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}
  
asyncCall();`
  },
  {
    id: 'c70da0cf-34ae-471d-b068-d7038585acd7',
    name: 'Generator example',
    language: 'javascript',
    notes:
      'It is possible for a generator to yield to an iterator using a "delegated yield" with the syntax yield*.',
    text: `function* argumentsGenerator() {
  for (let i = 0; i < arguments.length; i += 1) {
    yield arguments[i];
  }
}`
  },
  {
    id: '443a9411-f042-4fb0-beda-3d40c7349af0',
    name: 'Good old days',
    language: 'javascript',
    notes:
      'In the old days, doing several asynchronous operations in a row would lead to the classic callback pyramid of doom, like this:',
    text: `doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);`
  }
];
