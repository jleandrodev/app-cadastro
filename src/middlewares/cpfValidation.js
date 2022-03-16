

  const cpfValidation = async (req, res, next) => {

    const { cpf } = req.body;

    //remove qualquer caractere não numerico recebido
    const cleanCpf = cpf.replace(/\D/g,'');

    const geraNovoCpf = () => {    
        const oneToNine = cleanCpf.slice(0, -2);
        const numberOne = numberGenerates(oneToNine);
        const numberTwo = numberGenerates(oneToNine + numberOne);
        newCpf = oneToNine + numberOne + numberTwo;
      }
      
     const numberGenerates = (oneToNine) => {
        let total = 0;
        let reverse = oneToNine.length + 1;
      
        for(let stringNum of oneToNine) {
          total += reverse * Number(stringNum);
          reverse--;
        }
        const number = 11 - (total % 11);
        return number <= 9 ? String(number) : '0';
      };

      const validation = () => {
        if(!cleanCpf) return false;
        if(typeof cleanCpf !== 'string') return false;
        if(cleanCpf.length !== 11) return false;
        if(cleanCpf.charAt(0).repeat(11) === cleanCpf) return false;
        geraNovoCpf();
        return newCpf === cleanCpf;
      };

      const result = validation();

      if(result){

       next();
      } else {
          res.status(400).json({ error: `CPF is not valid!`})
          
      }
    };

    module.exports = cpfValidation;
