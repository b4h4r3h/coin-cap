import { Select } from 'antd';
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
const AppSelectLanguage = () => (
  <Select
    placeholder="English"
    showSearch
    optionFilterProp="children"
    dropdownMatchSelectWidth = {false}
    dropdownStyle={{ width: 200 }}
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'alarabia',
        label: 'العربیه',
      },
      {
        value: 'dansk',
        label: 'Dansk',
      },
      {
        value: 'russian',
        label: 'ελληνικά',
      },
      {
        value: 'english',
        label: 'English',
      },
      {
        value: 'spanish',
        label: 'Español',
      },
      {
        value: 'french',
        label: 'Français',
      },
      {
        value: 'china',
        label: 'हिंदी',
      },
      {
        value: 'indonesia',
        label: 'Bahasa Indonesia',
      },
      {
        value: 'italian',
        label: 'Italiano',
      },
      {
        value: 'netherlands',
        label: 'Nederlands',
      },
    ]}
  />
);
export default AppSelectLanguage;