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
            
            const generatedPrompts = [
                `在进行${getRandomSport()}运动时，${region}区域的${structure}被积极参与活动，是完成动作的关键${type}。`,
                `在康复训练中，针对${structure}的强化练习可以帮助恢复${region}区域的功能，建议进行${getRandomRehab()}。`,
                `${structure}在${getRandomSport()}运动中起到了重要的${getRandomFunction()}作用，是运动生物力学分析的重点。`,
                `运动员在训练${region}区域时，应特别注意${structure}的发力模式，可以通过${getRandomExercise()}来加强。`,
                `${getRandomSport()}需要${structure}的有效参与，这对于保持${region}区域的稳定性和力量至关重要。`
            ];
            
            onGeneratePrompts(generatedPrompts);
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