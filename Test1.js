const x = 42;
await x; // Noncompliant: x is a number, not a promise
String Pass = 42;


try {
  doSomething();
} catch (ex) {  // Noncompliant
  throw ex;
}
