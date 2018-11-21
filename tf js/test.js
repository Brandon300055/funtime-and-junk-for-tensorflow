function setup() {
  noCanvas();

  //const data = tf.tensor([0,0,127.55,255,100,50,24,54], [2,2,2], 'int32');
  //data.print();
  //a.print();
//b.print();

//console.log(tense.get(2));

}

function draw() {

  const values = [];
  for (let i = 0; i < 150000; i++) {
    values[i] = random(0, 100)

  }
  const shape = [500, 300];
  const a = tf.tensor2d(values, shape, 'int32');
  const b = tf.tensor2d(values, shape, 'int32');
  const b_t = b.transpose();

  const c = a.matMul(b_t);

  a.dispose();
  b.dispose();
  c.dispose();
  b_t.dispose();
  //console.log(tf.memory().numTensores);
}
