import React, { useState } from 'react';
import './PromptForm.css';

interface PromptFormProps {
    onGeneratePrompts: (newPrompts: string[]) => void;
}

// 按人体结构区域分组列出主要肌肉
const bodyRegions = {
    "Head and Neck (头部和颈部)": {
        "Muscles (肌肉)": [
            'Sternocleidomastoid (胸锁乳突肌)',
            'Trapezius (斜方肌上部)',
            'Splenius Capitis (头夹肌)'
        ],
        "Bones (骨骼)": [
            'Skull (颅骨)',
            'Cervical Vertebrae (颈椎)',
            'Mandible (下颌骨)'
        ]
    },
    "Upper Limb (上肢)": {
        "Muscles (肌肉)": [
            'Biceps Brachii (二头肌)',
            'Triceps Brachii (三头肌)',
            'Deltoid (三角肌)',
            'Brachialis (肱肌)',
            'Brachioradialis (肱桡肌)'
        ],
        "Bones (骨骼)": [
            'Humerus (肱骨)',
            'Radius (桡骨)',
            'Ulna (尺骨)',
            'Carpals (腕骨)',
            'Metacarpals (掌骨)'
        ]
    },
    "Torso (躯干)": {
        "Muscles (肌肉)": [
            'Pectoralis Major (胸大肌)',
            'Latissimus Dorsi (背阔肌)',
            'Rectus Abdominis (腹直肌)',
            'Obliques (腹斜肌)',
            'Erector Spinae (竖脊肌)'
        ],
        "Bones (骨骼)": [
            'Thoracic Vertebrae (胸椎)',
            'Lumbar Vertebrae (腰椎)',
            'Ribs (肋骨)',
            'Sternum (胸骨)',
            'Clavicle (锁骨)',
            'Scapula (肩胛骨)'
        ]
    },
    "Lower Limb (下肢)": {
        "Muscles (肌肉)": [
            'Quadriceps (股四头肌)',
            'Hamstrings (腘绳肌)',
            'Gastrocnemius (腓肠肌)',
            'Soleus (比目鱼肌)',
            'Gluteus Maximus (臀大肌)',
            'Tibialis Anterior (胫骨前肌)'
        ],
        "Bones (骨骼)": [
            'Femur (股骨)',
            'Tibia (胫骨)',
            'Fibula (腓骨)',
            'Patella (髌骨)',
            'Tarsals (跗骨)',
            'Metatarsals (跖骨)'
        ]
    }
};

// 定义类型以避免类型错误
type RegionKey = keyof typeof bodyRegions;
type StructureTypes = "Muscles (肌肉)" | "Bones (骨骼)";

// 辅助函数，生成随机运动
function getRandomSport() {
    const sports = ['篮球', '足球', '游泳', '网球', '跑步', '举重', '瑜伽', '排球'];
    return sports[Math.floor(Math.random() * sports.length)];
}

// 辅助函数，生成随机康复训练
function getRandomRehab() {
    const rehabs = ['等长收缩训练', '渐进式抗阻训练', '平衡稳定训练', '功能性动作练习', '伸展放松练习'];
    return rehabs[Math.floor(Math.random() * rehabs.length)];
}

// 辅助函数，生成随机功能
function getRandomFunction() {
    const functions = ['稳定', '动力', '平衡', '协调', '支撑', '传力', '缓冲'];
    return functions[Math.floor(Math.random() * functions.length)];
}

// 辅助函数，生成随机训练方法
function getRandomExercise() {
    const exercises = ['等速肌力训练', '闭链运动练习', '核心稳定训练', '多平面动作训练', '专项技能训练'];
    return exercises[Math.floor(Math.random() * exercises.length)];
}

// 辅助函数，生成随机运动方式
function getRandomMovement() {
    const movements = ['屈曲', '伸展', '内收', '外展', '旋转', '绕环', '推', '拉', '抬举', '下蹲'];
    return movements[Math.floor(Math.random() * movements.length)];
}

// 辅助函数，生成随机协同肌
function getRandomSynergist() {
    const synergists = ['周围小肌群', '深层稳定肌', '姿势肌', '协同肌群', '附近的固定肌'];
    return synergists[Math.floor(Math.random() * synergists.length)];
}

// 辅助函数，生成随机拮抗肌
function getRandomAntagonist() {
    const antagonists = ['对侧肌群', '拮抗肌', '反向作用肌', '对应的平衡肌'];
    return antagonists[Math.floor(Math.random() * antagonists.length)];
}

// 辅助函数，生成随机收缩方式
function getRandomContraction() {
    const contractions = ['向心收缩', '离心收缩', '等长收缩', '等速收缩', '爆发性收缩', '持续性收缩'];
    return contractions[Math.floor(Math.random() * contractions.length)];
}

// 辅助函数，生成随机运动表现
function getRandomPerformance() {
    const performances = ['爆发力', '耐力', '速度', '协调性', '平衡性', '灵活性', '反应速度', '技术动作'];
    return performances[Math.floor(Math.random() * performances.length)];
}

const PromptForm: React.FC<PromptFormProps> = ({ onGeneratePrompts }) => {
    const [selectedRegion, setSelectedRegion] = useState<string>('');
    const [selectedType, setSelectedType] = useState<string>('');
    const [selectedStructure, setSelectedStructure] = useState<string>('');
    
    const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(e.target.value);
        setSelectedType('');
        setSelectedStructure('');
    };
    
    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(e.target.value);
        setSelectedStructure('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedStructure) {
            const region = selectedRegion;
            const type = selectedType;
            const structure = selectedStructure;
            
            // 仅当选择的是肌肉时生成主动肌相关提示词
            if (type.includes("肌肉")) {
                const generatedPrompts = [
                    `在${getRandomSport()}运动中，${structure}作为主动肌参与${region}区域的${getRandomMovement()}，负责产生主要动力。`,
                    `${structure}是${getRandomSport()}中的主要主动肌，同时需要${getRandomSynergist()}作为协同肌配合工作，${getRandomAntagonist()}则作为拮抗肌提供稳定。`,
                    `运动生物力学分析表明，${structure}在${getRandomMovement()}动作中扮演主动肌角色，通过${getRandomContraction()}方式产生力量。`,
                    `训练${structure}作为主动肌的爆发力，对提高${getRandomSport()}的${getRandomPerformance()}至关重要，建议采用${getRandomExercise()}。`,
                    `在康复训练初期，可先强化${structure}的主动肌功能，通过${getRandomRehab()}逐步恢复其在${region}区域的正常活动能力。`
                ];
                onGeneratePrompts(generatedPrompts);
            } 
            // 如果选择的是骨骼，则生成与骨骼相关的提示词
            else if (type.includes("骨骼")) {
                const generatedPrompts = [
                    `${structure}作为${region}区域的重要支撑结构，在${getRandomSport()}中为附着在其上的主动肌提供稳定的支点。`,
                    `在运动生物力学分析中，${structure}的形态特征决定了附着在其上的主动肌的力臂长度，影响力矩产生。`,
                    `${getRandomSport()}运动时，附着在${structure}上的主动肌通过肌腱产生拉力，带动骨骼活动。`,
                    `运动损伤后，${structure}周围的主动肌和拮抗肌力量平衡可能被打破，需要通过${getRandomRehab()}恢复。`,
                    `${structure}与相关关节一起为主动肌提供了活动的骨性支架，是力量传递的关键结构。`
                ];
                onGeneratePrompts(generatedPrompts);
            }
        }
    };

    // 获取当前选中区域的类型选项
    const getTypeOptions = () => {
        if (selectedRegion && bodyRegions[selectedRegion as RegionKey]) {
            return Object.keys(bodyRegions[selectedRegion as RegionKey]);
        }
        return [];
    };

    // 获取当前选中类型的结构选项
    const getStructureOptions = () => {
        if (selectedRegion && selectedType && 
            bodyRegions[selectedRegion as RegionKey] && 
            bodyRegions[selectedRegion as RegionKey][selectedType as StructureTypes]) {
            return bodyRegions[selectedRegion as RegionKey][selectedType as StructureTypes];
        }
        return [];
    };

    return (
        <form onSubmit={handleSubmit} className="prompt-form">
            <h2 className="form-title">运动生物力学提示词生成器</h2>
            
            {/* 显示当前选择路径 */}
            {selectedRegion && (
                <div className="selection-path">
                    <strong>{selectedRegion}</strong>
                    {selectedType && (
                        <>
                            <span>→</span>
                            <strong>{selectedType}</strong>
                        </>
                    )}
                    {selectedStructure && (
                        <>
                            <span>→</span>
                            <strong>{selectedStructure}</strong>
                        </>
                    )}
                </div>
            )}
            
            <div className="form-group">
                <label htmlFor="region-select" className="form-label">选择身体区域:</label>
                <select
                    id="region-select"
                    value={selectedRegion}
                    onChange={handleRegionChange}
                    className="form-control"
                >
                    <option value="">-- 选择身体区域 --</option>
                    {Object.keys(bodyRegions).map((region) => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
            </div>

            {selectedRegion && (
                <div className="form-group">
                    <label htmlFor="type-select" className="form-label">选择结构类型:</label>
                    <select
                        id="type-select"
                        value={selectedType}
                        onChange={handleTypeChange}
                        className="form-control"
                    >
                        <option value="">-- 选择结构类型 --</option>
                        {getTypeOptions().map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {selectedRegion && selectedType && (
                <div className="form-group">
                    <label htmlFor="structure-select" className="form-label">选择具体结构:</label>
                    <select
                        id="structure-select"
                        value={selectedStructure}
                        onChange={(e) => setSelectedStructure(e.target.value)}
                        className="form-control"
                    >
                        <option value="">-- 选择具体结构 --</option>
                        {getStructureOptions().map((structure, index) => (
                            <option key={index} value={structure}>
                                {structure}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <button 
                type="submit" 
                disabled={!selectedStructure}
                className="submit-button"
            >
                生成提示词
            </button>
        </form>
    );
};

export default PromptForm;