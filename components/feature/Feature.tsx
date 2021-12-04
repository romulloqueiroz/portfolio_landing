import React from 'react'
import { ContainerFeature, ContainerFeatureTitle, ContainerFeatureText } from './Feature.styles'

interface FeatureProps {
  title: string
  text: string
}

const Feature: React.FC<FeatureProps> = ({ title, text }) => (
  <ContainerFeature>
    <ContainerFeatureTitle>
      <div />
      <h1>{title}</h1>
    </ContainerFeatureTitle>
    <ContainerFeatureText>
      <p>{text}</p>
    </ContainerFeatureText>
  </ContainerFeature>
)

export default Feature
