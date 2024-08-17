import { Verb } from "@/types/verb.interface";

export function csvToJson(csv: string): Verb[] {

    const lines = csv.trim().split('\n');
    const result: Verb[] = [];

    for (const line of lines) {
        const [id, type, simple_form, third_person, simple_past, past_participle, gerund, ...meaningParts] = line.split(',');
        const meaning = meaningParts.join(' ').trim();

        const mappedType = type === 'R' ? 'regular' : 'irregular';

        const verb: Verb = {
            id: id,
            type: mappedType,
            simple_form,
            third_person,
            simple_past,
            past_participle,
            gerund,
            meaning
        };

        result.push(verb);
    }

    return result;
}