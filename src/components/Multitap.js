import React, { useState } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import { useTranslation } from "react-i18next";

const Multitap = () => {
  const { t } = useTranslation("global");

  const [multitapInput, setMultitapInput] = useState("Ser un espantapájaros es una sensación de aislamiento, de no pertenecer a ningún lugar y de ser diferente a los demás. Pero a pesar de todo, uno sigue esperando, esperando encontrar algún día ese amor.");
  const [reverseMultitapInput, setReverseMultitapInput] = useState("");
  const [multitapResult, setMultitapResult] = useState("");
  const [reverseMultitapResult, setReverseMultitapResult] = useState("");

  const handleMultitapClick = () => {
    const multitapMap = {
      'a': '2', 'b': '22', 'c': '222',
      'd': '3', 'e': '33', 'f': '333',
      'g': '4', 'h': '44', 'i': '444',
      'j': '5', 'k': '55', 'l': '555',
      'm': '6', 'n': '66', 'o': '666',
      'p': '7', 'q': '77', 'r': '777', 's': '7777',
      't': '8', 'u': '88', 'v': '888',
      'w': '9', 'x': '99', 'y': '999', 'z': '9999',';': '\n' 
    };
    let input=multitapInput;
    let output = '';
    let currentLine = '';
    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i).toLowerCase();
      if (char === '\n') {
        output += currentLine.trim().split('').map(c => multitapMap[c] || c).join('|') + ';';
        currentLine = '';
      } else {
        currentLine += char;
      }
    }
    // Process the last line
    output += currentLine.trim().split('').map(c => multitapMap[c] || c).join('|');
    setMultitapResult(output);
  };

  const handleReverseMultitapClick = () => {
    const input = reverseMultitapInput;
    const reverseMultitapMap = {
      '2': 'a', '22': 'b', '222': 'c',
      '3': 'd', '33': 'e', '333': 'f',
      '4': 'g', '44': 'h', '444': 'i',
      '5': 'j', '55': 'k', '555': 'l',
      '6': 'm', '66': 'n', '666': 'o',
      '7': 'p', '77': 'q', '777': 'r', '7777': 's',
      '8': 't', '88': 'u', '888': 'v',
      '9': 'w', '99': 'x', '999': 'y', '9999': 'z',
      '|': '',
      ';': '\n' 
    };
  
    let output = '';
    let currentMultitapChar = '';
    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      
      if (char === '|') {
        output += reverseMultitapMap[currentMultitapChar] || currentMultitapChar;
        currentMultitapChar = '';
      } else {
        currentMultitapChar += char;
      }
    }
    output += reverseMultitapMap[currentMultitapChar] || currentMultitapChar;
    setReverseMultitapResult(output);
  };


  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Input
            type="textarea"
            placeholder="Enter text to Multitap"
            value={multitapInput}
            onChange={(e) => setMultitapInput(e.target.value)}
            className="input-text"
            style={{ minHeight: "40vh" }}
            defaultValue="Ser un espantapájaros es una sensación de aislamiento, de no pertenecer a ningún lugar y de ser diferente a los demás.
 Pero a pesar de todo, uno sigue esperando, esperando encontrar algún día ese amor."
          ></Input>
          <Button onClick={handleMultitapClick} className="my-2">
            Multitap
          </Button>
          <Input
            type="textarea"
            placeholder="Multitap result"
            value={multitapResult}
            readOnly
            className="textarea"
            style={{ minHeight: "40vh" }}
          />
          <Button
            color="secondary"
            onClick={() => handleCopyClick(multitapResult)}
            className="mt-2 ml-2"
            style={{ float: "right" }}
          >
            {t("multiTap.copy")}
          </Button>
        </Col>
        <Col>
          <Input
            type="textarea"
            placeholder="Enter text to Reverse Multitap"
            value={reverseMultitapInput}
            onChange={(e) => setReverseMultitapInput(e.target.value)}
            className="input-text"
            style={{ minHeight: "40vh" }}
          />
          <Button onClick={handleReverseMultitapClick} className="my-2">
            Reverse Multitap
          </Button>
          <Input
            type="textarea"
            placeholder="Reverse Multitap result"
            value={reverseMultitapResult}
            readOnly
            className="textarea"
            style={{ minHeight: "40vh" }}
          />
          <Button
            color="secondary"
            onClick={() => handleCopyClick(reverseMultitapResult)}
            className="mt-2 ml-2"
            style={{ float: "right" }}
          >
            {t("multiTap.copy")}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Multitap;
