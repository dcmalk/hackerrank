function processData(input) {
  const lines = input.split('\n');

  lines.forEach((line) => {
    const [op, type, value] = line.trim().split(';');
    let result;

    if (op === 'S') {
      result = value
        .replace(/[^a-zA-Z0-9]/g, '')
        .replace(/([a-z0-9])([A-Z])/g, `$1 $2`)
        .toLowerCase();
    } else if (op === 'C') {
      const words = value.trim().split(' ');
      result = words.map((word) => word[0].toUpperCase() + word.slice(1)).join('');

      if (type === 'M' || type === 'V') {
        result = result[0].toLowerCase() + result.slice(1);
      }

      if (type === 'M') result += '()';
    }

    console.log(result);
  });

  // // First pass
  // for (let i = 0; i < inputs.length; i++) {
  //   let args = inputs[i].trim().split(';');
  //   let result;

  //   switch (op) {
  //     case 'S':
  //       result = value
  //         .replace(/[^a-zA-Z0-9]/g, '')
  //         .replace(/([a-z0-9])([A-Z])/g, `$1 $2`)
  //         .toLowerCase();
  //       break;

  //     case 'C':
  //       let words = value.trim().split(' ');
  //       result = words.map((word) => word[0].toUpperCase() + word.slice(1)).join('');

  //       if (type === 'M' || type === 'V') {
  //         result = result[0].toLowerCase() + result.slice(1);
  //       }

  //       if (type === 'M') result += '()';
  //       break;
  //   }

  //   console.log(result);
  // }
}

function main() {
  input = `S;M;plasticCup()
  C;V;mobile phone
  C;C;coffee machine
  S;C;LargeSoftwareBook
  C;M;white sheet of paper
  S;V;pictureFrame
  S;V;iPad
  C;M;mouse pad
  C;C;code swarm
  S;C;OrangeHighlighter`;

  processData(input);
}

main();
