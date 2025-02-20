import React, { useState } from 'react'
import './App.css'

interface Param {
  id: number
  name: string
  type: 'string'
}

interface ParamValue {
  paramId: number
  value: string
}

// пример интерфейса Color, т.к. в задании его не было.
interface Color {
  colorName: string
  hex: string
  rgb: string
}

interface Model {
  paramValues: ParamValue[]
  colors: Color[]
}

interface Props {
  params: Param[]
  model: Model
}

const params: Param[] = [
  { id: 1, name: 'Назначение', type: 'string' },
  { id: 2, name: 'Длина', type: 'string' },
  { id: 3, name: 'Страна производства', type: 'string' },
]
const model: Model = {
  paramValues: [
    { paramId: 1, value: 'повседневное' },
    { paramId: 2, value: 'макси' },
    { paramId: 3, value: 'Китай' },
  ],
  colors: [],
}

const ParamEditor: React.FC<Props> = ({ params, model }) => {
  const [modelValue, setParamValue] = useState<ParamValue[]>(model.paramValues)

  const handleChange = (id: number, valueInput: string) => {
    setParamValue((value) => {
      return value.map((item) => {
        if (item.paramId === id) {
          return { ...item, value: valueInput }
        }
        return item
      })
    })
  }

  const getModel = () => {
    console.log(modelValue)
  }

  return (
    <div className='params-editor'>
      <div className='params-editor__container'>
        {params.map((param) => (
          <div key={param.id} className='params-editor__param'>
            <label htmlFor={param.name} className='params-editor__param-name'>{param.name}: </label>
            <input id={param.name} type='text' className='params-editor__param-value' value={modelValue.find((item) => param.id === item.paramId)?.value} onChange={(e) => handleChange(param.id, e.target.value)}></input>
          </div>
        ))}
        <div className='params-editor__btn-container'>
          <button className='params-editor__btn' onClick={getModel}>
            Сохранить и получить модель
          </button>
        </div>
      </div>
    </div>
  )
}

const App: React.FC = () => {
  return <ParamEditor params={params} model={model} />
}

export default App
