import React from 'react'
import { YMaps, Map, Placemark, SearchControl } from 'react-yandex-maps'
import useStyles from './styles'
import useActions from '../../hooks/useActions'
import useSelector from '../../hooks/useSelector'
import classNames from 'classnames'
import { useEffectOnce } from 'react-use'
import { YandexMapSettings } from '../../utils/YandexMapSettings'

type Props = {
  className?: string
}

const YandexMap = ({ className }: Props) => {
  const classes = useStyles()
  const { position } = useSelector((state) => state.map)
  const { setPosition } = useActions()

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        setPosition([position.coords.latitude, position.coords.longitude]),
      () => setPosition(YandexMapSettings.COORDS_MINSK)
    )
  }

  useEffectOnce(() => {
    getLocation()
  })

  return (
    <YMaps
      query={{
        apikey: YandexMapSettings.API_KEY,
      }}
    >
      <Map
        className={classNames(className, {
          [classes.root]: className === undefined,
        })}
        defaultState={{
          ...YandexMapSettings.MAP_DEFAULT_STATE,
          center: position,
        }}
        modules={YandexMapSettings.MAP_MODULES}
      >
        <Placemark
          defaultGeometry={position}
          modules={['geoObject.addon.balloon']}
          properties={{
            balloonContentBody: 'You are here',
          }}
        />
        <SearchControl options={{ float: 'left' }} />
      </Map>
    </YMaps>
  )
}

export default React.memo(YandexMap)
