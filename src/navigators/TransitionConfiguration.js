import { Animated, Easing, Platform } from 'react-native'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'

let CrossFadeTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 1]
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  })

  return {
    opacity
  }
};

const IOSTransitionSpec = ({
  duration: 500,
  easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  timing: Animated.timing,
}: NavigationTransitionSpec);

export default TransitionConfiguration = () => {
  return {
    transitionSpec: IOSTransitionSpec,
    screenInterpolator: (sceneProps) => {

      const { position, scene } = sceneProps;
      const { index, route } = scene
      const params = route.params || {}
      const transition = params.transition || 'default'

      const final = {
        crossFade: CrossFadeTransition(index, position),
        default: CardStackStyleInterpolator.forVertical(sceneProps),
      }[transition]

      return final
    }
  }
}