import React from 'react';

const Keys = ({ output }) => {
  const keys = [
    {
      className: 'key',
      dataType: 'operator',
      dataValue: '+'
    },
    {
      className: 'key',
      dataType: 'operator',
      dataValue: '-'
    },
    {
      className: 'key',
      dataType: 'operator',
      dataValue: '*'
    },
    {
      className: 'key',
      dataType: 'operator',
      dataValue: '/'
    },
    {
      className: 'key',
      dataType: 'number',
      dataValue: '7'
    },
    {
      className: 'key',
      dataType: 'number',
      dataValue: '8'
    },
    {
      className: 'key',
      dataType: 'number',
      dataValue: '9'
    },
    {
      className: 'key',
      dataType: 'number',
      dataValue: '6'
    },
    {
      className: 'key',
      dataType: 'number',
      dataValue: '5'
    },
    {
      className: 'key',
      dataType: 'number',
      dataValue: '4'
    },
    {
      className: 'key calculate',
      dataType: 'calculate',
      dataValue: '='
    },
    {
      className: 'key',
      dataType: 'number',
      dataValue: '1'
    },
    {
      className: 'key',
      dataType: 'number',
      dataValue: '2'
    },
    {
      className: 'key',
      dataType: 'number',
      dataValue: '3'
    },
    {
      className: 'key',
      dataType: 'number',
      dataValue: '0'
    },
    {
      className: 'key',
      dataType: 'decimal',
      dataValue: '.'
    },
    {
      className: 'key',
      dataType: 'clear',
      dataValue: 'AC'
    }
  ];

  const keyList = keys.map(key => {
    return (
      <div
        key={key.dataValue}
        className={key.className}
        data-type={key.dataType}
        data-value={key.dataValue}
        onClick={e => output(e)}
      >
        {key.dataValue}
      </div>
    );
  });

  return keyList;
};

export default Keys;
