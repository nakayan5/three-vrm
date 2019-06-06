import { GLTFNode, HumanBone } from '../types'

export class VRMHumanBones {
  public [HumanBone.Hips]: GLTFNode
  public [HumanBone.LeftUpperLeg]: GLTFNode
  public [HumanBone.RightUpperLeg]: GLTFNode
  public [HumanBone.LeftLowerLeg]: GLTFNode
  public [HumanBone.RightLowerLeg]: GLTFNode
  public [HumanBone.LeftFoot]: GLTFNode
  public [HumanBone.RightFoot]: GLTFNode
  public [HumanBone.Spine]: GLTFNode
  public [HumanBone.Chest]: GLTFNode
  public [HumanBone.Neck]: GLTFNode
  public [HumanBone.Head]: GLTFNode
  public [HumanBone.LeftShoulder]?: GLTFNode
  public [HumanBone.RightShoulder]?: GLTFNode
  public [HumanBone.LeftUpperArm]: GLTFNode
  public [HumanBone.RightUpperArm]: GLTFNode
  public [HumanBone.LeftLowerArm]: GLTFNode
  public [HumanBone.RightLowerArm]: GLTFNode
  public [HumanBone.LeftHand]: GLTFNode
  public [HumanBone.RightHand]: GLTFNode
  public [HumanBone.LeftToes]?: GLTFNode
  public [HumanBone.RightToes]?: GLTFNode
  public [HumanBone.LeftEye]?: GLTFNode
  public [HumanBone.RightEye]?: GLTFNode
  public [HumanBone.Jaw]: GLTFNode
  public [HumanBone.LeftThumbProximal]?: GLTFNode
  public [HumanBone.LeftThumbIntermediate]?: GLTFNode
  public [HumanBone.LeftThumbDistal]?: GLTFNode
  public [HumanBone.LeftIndexProximal]?: GLTFNode
  public [HumanBone.LeftIndexIntermediate]?: GLTFNode
  public [HumanBone.LeftIndexDistal]?: GLTFNode
  public [HumanBone.LeftMiddleProximal]?: GLTFNode
  public [HumanBone.LeftMiddleIntermediate]?: GLTFNode
  public [HumanBone.LeftMiddleDistal]?: GLTFNode
  public [HumanBone.LeftRingProximal]?: GLTFNode
  public [HumanBone.LeftRingIntermediate]?: GLTFNode
  public [HumanBone.LeftRingDistal]?: GLTFNode
  public [HumanBone.LeftLittleProximal]?: GLTFNode
  public [HumanBone.LeftLittleIntermediate]?: GLTFNode
  public [HumanBone.LeftLittleDistal]?: GLTFNode
  public [HumanBone.RightThumbProximal]?: GLTFNode
  public [HumanBone.RightThumbIntermediate]?: GLTFNode
  public [HumanBone.RightThumbDistal]?: GLTFNode
  public [HumanBone.RightIndexProximal]?: GLTFNode
  public [HumanBone.RightIndexIntermediate]?: GLTFNode
  public [HumanBone.RightIndexDistal]?: GLTFNode
  public [HumanBone.RightMiddleProximal]?: GLTFNode
  public [HumanBone.RightMiddleIntermediate]?: GLTFNode
  public [HumanBone.RightMiddleDistal]?: GLTFNode
  public [HumanBone.RightRingProximal]?: GLTFNode
  public [HumanBone.RightRingIntermediate]?: GLTFNode
  public [HumanBone.RightRingDistal]?: GLTFNode
  public [HumanBone.RightLittleProximal]?: GLTFNode
  public [HumanBone.RightLittleIntermediate]?: GLTFNode
  public [HumanBone.RightLittleDistal]?: GLTFNode
  public [HumanBone.UpperChest]?: GLTFNode

  [name: string]: GLTFNode | undefined;
}