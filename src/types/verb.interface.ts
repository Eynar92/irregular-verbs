export interface Verb {
    id: string;
    type: 'regular' | 'irregular',
    simple_form: string;
    third_person: string;
    simple_past: string;
    past_participle: string;
    gerund: string;
    meaning: string;
}