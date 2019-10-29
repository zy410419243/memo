import { replacePlaceholderWithParams } from '../sql';

describe('sql', () => {
  it('replacePlaceholderWithParams', () => {
    expect(replacePlaceholderWithParams('SELECT * FROM dictionary where value = 1;', {})).toBe(
      'SELECT * FROM dictionary where value = 1;',
    );

    expect(
      replacePlaceholderWithParams(
        `SELECT * FROM dictionary where
        value = 1;`,
        {},
      ),
    ).toBe(`SELECT * FROM dictionary where
        value = 1;`);

    expect(replacePlaceholderWithParams('SELECT * FROM dictionary where value = @value;', { value: 33 })).toBe(
      'SELECT * FROM dictionary where value = 33;',
    );

    expect(replacePlaceholderWithParams('SELECT * FROM dictionary where value = @value;', { value: 'test' })).toBe(
      // eslint-disable-next-line quotes
      "SELECT * FROM dictionary where value = 'test';",
    );

    expect(
      replacePlaceholderWithParams('SELECT * FROM dictionary where value = @value and id = @id;', { value: 33 }),
    ).toBe('SELECT * FROM dictionary where value = 33 and id = @id;');

    expect(
      replacePlaceholderWithParams('SELECT * FROM dictionary where value = @value and id = @id;', {
        value: 33,
        id: '',
      }),
      // eslint-disable-next-line quotes
    ).toBe("SELECT * FROM dictionary where value = 33 and id = '';");

    expect(
      replacePlaceholderWithParams('SELECT * FROM dictionary where value = @value and id = @id;', {
        value: 33,
        id: null,
      }),
    ).toBe('SELECT * FROM dictionary where value = 33 and id = null;');

    expect(
      replacePlaceholderWithParams('SELECT * FROM dictionary where value = @value and id = @id;', {
        value: 33,
        id: undefined,
      }),
    ).toBe('SELECT * FROM dictionary where value = 33 and id = @id;');

    expect(
      replacePlaceholderWithParams(
        `SELECT * FROM dictionary where value = @value
        and id = @id;`,
        { value: 33, id: '' },
      ),
    ).toBe(`SELECT * FROM dictionary where value = 33
        and id = '';`);

    expect(
      replacePlaceholderWithParams(
        `insert into stock-shipment (type, length, width, height, weight, patch, material_cost, freight, material_type)
          values (@type, @length, @width, @height, @weight, @patch, @materialCost, @freight, @materialType)`,
        {
          type: 0,
          length: 100,
          width: 101,
          height: 102,
          weight: 103,
          patch: '201910291159',
          materialCost: 104.1,
          freight: 105.1,
          materialType: 1,
        },
      ),
    )
      .toBe(`insert into stock-shipment (type, length, width, height, weight, patch, material_cost, freight, material_type)
          values (0, 100, 101, 102, 103, '201910291159', 104.1, 105.1, 1)`);
  });
});
