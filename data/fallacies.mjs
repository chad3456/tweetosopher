/**
 * Logical fallacies, in the taxonomy the standard reference lists use.
 *
 * Two things make this list different from the ones that circulate as infographics.
 *
 * First, every entry carries a `notFallacy` — the legitimate move it is most often
 * confused with. This matters more than the definition. In practice the fallacy
 * names are used mainly as weapons: "ad hominem" is thrown at any criticism of a
 * speaker, though attacking someone's credibility is entirely legitimate when their
 * testimony is the evidence. A list that teaches only the label arms people to
 * misuse it, and the misuse is now commoner than the fallacy.
 *
 * Second, the examples are drawn from ordinary argument rather than from cartoons,
 * because a fallacy is only worth naming when it is tempting.
 *
 * tuple = [id, name, family, definition, example, notFallacy]
 */

const FAMILIES = new Set([
  'relevance', 'ambiguity', 'presumption', 'causal', 'statistical', 'formal',
]);

const ROWS = [
  // ── Relevance: the premise does not bear on the conclusion ───────────────
  ['ad-hominem', 'Ad Hominem', 'relevance',
    'Rejecting a claim by attacking the person making it rather than the claim.',
    '"You would say that, you work for an oil company" — offered as a reason the emissions figure is wrong, rather than as a reason to check it.',
    'Attacking credibility is legitimate when the person IS the evidence. If someone\'s testimony is the only support for a claim, their honesty and expertise are directly relevant. Calling that ad hominem is the most common misuse of the term.'],
  ['tu-quoque', 'Tu Quoque', 'relevance',
    'Deflecting criticism by pointing out that the critic is guilty of the same thing.',
    '"You are lecturing me about flying while you took three holidays last year."',
    'Hypocrisy is genuine evidence about a person\'s sincerity and about how demanding a standard really is. It is only fallacious when offered as a reason the CLAIM is false.'],
  ['straw-man', 'Straw Man', 'relevance',
    'Refuting a weakened or distorted version of an argument nobody made.',
    'Answering "we should reform the asylum process" with "so you want open borders".',
    'Drawing out an implication your opponent has not stated but is committed to is not a straw man — it is argument. The test is whether they would accept the implication as theirs.'],
  ['appeal-to-authority', 'Appeal to Improper Authority', 'relevance',
    'Citing an authority outside their field, or a contested claim as though settled.',
    'A Nobel laureate in physics quoted on nutrition, cited as though the prize transferred.',
    'Deferring to genuine expertise in its own field is not a fallacy; it is how anyone knows almost anything. The fallacy is in the mismatch, not in the deference.'],
  ['appeal-to-popularity', 'Argumentum ad Populum', 'relevance',
    'Treating widespread belief as evidence of truth.',
    '"Most people think this, so it must be right" — the argument that would have settled every question wrongly for most of history.',
    'Widespread belief IS evidence in some domains — about language use, social norms, or where many independent judges have relevant information. The fallacy is treating consensus as decisive on matters of fact it cannot reach.'],
  ['appeal-to-emotion', 'Appeal to Emotion', 'relevance',
    'Substituting an emotional reaction for a reason.',
    'A charity advertisement that establishes urgency without establishing that the intervention works.',
    'Emotion is often the appropriate response to a fact and can be part of a sound argument. The fallacy is when the feeling REPLACES the evidence rather than following from it.'],
  ['appeal-to-nature', 'Appeal to Nature', 'relevance',
    'Treating natural as equivalent to good, or unnatural as bad.',
    '"It is a natural remedy" — as though hemlock and radon were not.',
    'Evolutionary or ecological arguments about what a system is adapted for can be legitimate. The fallacy is the leap from "is natural" to "is therefore good", which is Hume\'s is–ought gap wearing a different coat.'],
  ['genetic-fallacy', 'The Genetic Fallacy', 'relevance',
    'Judging a claim by where it came from rather than whether it is true.',
    'Dismissing a statistic because of who funded the study, without examining the method.',
    'Provenance is legitimate evidence about RELIABILITY when you cannot check the claim directly. Funding source is a reason to scrutinise; it is not by itself a refutation.'],
  ['whataboutism', 'Whataboutism', 'relevance',
    'Answering a charge by raising a different one against the accuser or their allies.',
    '"Before you talk about our prisons, what about theirs?"',
    'Raising comparable cases is legitimate when the question is about consistency of a standard, or about relative priority given finite attention. It becomes fallacious when used to avoid answering rather than to widen the frame.'],
  ['appeal-to-consequences', 'Appeal to Consequences', 'relevance',
    'Arguing a claim is false because its truth would be unwelcome.',
    '"If that were true, everything we have built would be worthless — so it cannot be."',
    'Consequences bear legitimately on what to DO and on how much evidence to require before acting. They bear on what is TRUE only via evidence.'],

  // ── Presumption: the argument assumes what it needs to show ──────────────
  ['begging-the-question', 'Begging the Question', 'presumption',
    'Assuming the conclusion within the premises.',
    '"It is wrong because it is immoral." The premise and conclusion are the same claim in different clothes.',
    'This does NOT mean "raises the question", which is now its dominant popular use. Correcting people on that is usually pedantry; using it correctly is still worth doing.'],
  ['false-dilemma', 'False Dilemma', 'presumption',
    'Presenting two options as exhaustive when others exist.',
    '"Either we accept this proposal or we do nothing."',
    'Some dilemmas are real. When the alternatives genuinely are exhaustive, insisting on a third way is not sophistication — it is wishful thinking. The work is in showing the third option exists.'],
  ['loaded-question', 'Loaded Question', 'presumption',
    'A question whose form presupposes something not established.',
    '"When did you stop cutting corners?" — either answer concedes the premise.',
    'A question presupposing something already agreed is not loaded. The fallacy is smuggling a contested premise past the answer.'],
  ['no-true-scotsman', 'No True Scotsman', 'presumption',
    'Redefining a category mid-argument to exclude a counterexample.',
    '"No serious economist believes that." Presented with one who does: "Well, no SERIOUS one."',
    'Definitions can be legitimately tightened when the original was loose and the tightening is principled and stated. The fallacy is doing it only to escape, and only after the counterexample appears.'],
  ['moving-goalposts', 'Moving the Goalposts', 'presumption',
    'Raising the evidential bar once the original bar is met.',
    'Asking for one study, then for replication, then for a meta-analysis, then for a mechanism — while never having said in advance what would settle it.',
    'Raising standards is legitimate when new information shows the old standard was too low, or in proportion to the size of the claim. Say the standard in advance and the difference becomes visible.'],
  ['special-pleading', 'Special Pleading', 'presumption',
    'Exempting a favoured case from a standard applied everywhere else, without justifying the exemption.',
    'Applying strict scrutiny to research one dislikes and waving through research one likes.',
    'Exemptions can be justified — relevant differences between cases are real. What makes it a fallacy is the absence of a stated reason that would also apply to the other side.'],
  ['motte-and-bailey', 'Motte and Bailey', 'presumption',
    'Defending a strong controversial claim by retreating to a weak uncontroversial one, then returning.',
    'Advancing a sweeping thesis, and when challenged insisting only the obvious version was meant — then arguing from the sweeping one again.',
    'Named by Nicholas Shackel in 2005. Distinguishing which claim you are making, and staying there, is the fix. Clarifying a claim under challenge is not the fallacy; oscillating is.'],
  ['unfalsifiability', 'Unfalsifiability', 'presumption',
    'A claim constructed so that no observation could count against it.',
    'A theory whose defenders explain both a result and its opposite, with equal confidence, after the fact.',
    'Some true claims are hard to test with current tools. The fallacy is the claim that cannot in PRINCIPLE be wrong, not the one that is merely difficult to check.'],

  // ── Causal reasoning ─────────────────────────────────────────────────────
  ['post-hoc', 'Post Hoc Ergo Propter Hoc', 'causal',
    'Inferring causation from sequence.',
    '"Crime fell after we introduced the policy" — in a decade when crime fell almost everywhere.',
    'Temporal order is a NECESSARY condition for causation and therefore real evidence. It is simply not sufficient. What is missing is a control, not the observation.'],
  ['correlation-causation', 'Cum Hoc Ergo Propter Hoc', 'causal',
    'Inferring causation from association.',
    'Ice cream sales and drownings rise together; both are caused by summer.',
    'Correlation is genuine evidence for causation, and in many fields the only evidence available. The error is treating it as conclusive, not as treating it as relevant — a distinction the popular slogan flattens.'],
  ['single-cause', 'The Single Cause Fallacy', 'causal',
    'Assuming one cause where several are operating.',
    'Attributing a company\'s failure to one decision, when the market, the funding climate and three other decisions were all necessary.',
    'Sometimes one cause really does dominate, and insisting everything is multi-causal can be its own evasion. The test is whether removing the named cause would have changed the outcome.'],
  ['slippery-slope', 'Slippery Slope', 'causal',
    'Claiming one step leads inevitably to an extreme outcome, without establishing the mechanism.',
    '"Allow this exception and there will be no rule left."',
    'Slopes are sometimes real and the mechanism can be shown — precedent in law works exactly this way. The fallacy is the ASSERTED inevitability with no account of how each step forces the next.'],
  ['texas-sharpshooter', 'The Texas Sharpshooter', 'causal',
    'Finding a pattern after the fact and treating it as though it had been predicted.',
    'Firing at a barn, then painting the target around the tightest cluster. In practice: choosing the subgroup and the endpoint after seeing the data.',
    'Exploratory analysis is legitimate and necessary. It becomes a fallacy when the hypothesis it generates is reported as though it had been tested. Pre-registration exists to make the difference visible.'],
  ['regression-fallacy', 'The Regression Fallacy', 'causal',
    'Attributing to an intervention a change that regression to the mean would produce anyway.',
    'The worst-performing schools improve after any intervention, because they were selected for being extreme.',
    'The intervention may still work. The point is that the design cannot tell, because a control group was needed and was not used.'],

  // ── Statistical ──────────────────────────────────────────────────────────
  ['hasty-generalisation', 'Hasty Generalisation', 'statistical',
    'Drawing a general conclusion from too few or unrepresentative cases.',
    'Two bad experiences with a service, reported as what the service is like.',
    'Small samples are informative about LARGE effects — one case is enough to refute "never happens". The fallacy is in the size of the conclusion relative to the evidence, not in using few cases at all.'],
  ['anecdotal-evidence', 'The Anecdotal Fallacy', 'statistical',
    'Preferring a vivid individual case to systematic evidence.',
    '"My grandfather smoked and lived to ninety."',
    'Anecdotes are legitimate for existence claims, for generating hypotheses, and for identifying failure modes a dataset averaged away. They cannot establish a rate.'],
  ['survivorship-fallacy', 'Survivorship Bias', 'statistical',
    'Reasoning only from cases that made it through a selection process.',
    'Studying successful founders for the habits that caused success, without checking whether unsuccessful ones had the same habits.',
    'Studying survivors is fine when you have the base rate too. The fallacy is the missing denominator, not the interest in survivors.'],
  ['base-rate-fallacy', 'The Base Rate Fallacy', 'statistical',
    'Ignoring prior frequency when interpreting evidence.',
    'A rare condition and an accurate test still produce mostly false positives.',
    'Base rates can legitimately be set aside when you have strong individuating evidence. What cannot be done is ignoring them by default.'],
  ['cherry-picking', 'Cherry Picking', 'statistical',
    'Presenting the subset of evidence that supports a position while omitting the rest.',
    'Citing the three studies that found an effect and not the eleven that did not.',
    'Selecting the highest-quality studies is not cherry picking — it is doing the review properly. The difference is whether the selection criterion is stated in advance and applied to both sides.'],
  ['nirvana-fallacy', 'The Nirvana Fallacy', 'statistical',
    'Rejecting a real improvement because it falls short of a perfect solution.',
    '"That reform would not fix the whole problem, so it is not worth doing."',
    'Sometimes a partial fix genuinely does harm — by absorbing the pressure for a real one, or by legitimising the system. That is an argument, not the fallacy; the fallacy is the bare appeal to imperfection.'],

  // ── Ambiguity ────────────────────────────────────────────────────────────
  ['equivocation', 'Equivocation', 'ambiguity',
    'Using a word in two senses within one argument.',
    '"Nothing is better than eternal happiness; a sandwich is better than nothing" — two meanings of "nothing".',
    'Words legitimately have several senses, and using one consistently is not a fallacy. The error is the shift mid-argument, usually unnoticed by the person making it.'],
  ['ambiguity-fallacy', 'Amphiboly', 'ambiguity',
    'An argument whose force depends on a grammatical ambiguity.',
    'Contract disputes turn on this constantly, and the ambiguity is often deliberate.',
    'Ordinary language is ambiguous; asking for clarification is the fix, not an accusation.'],
  ['definist-fallacy', 'The Definist Fallacy', 'ambiguity',
    'Defining a contested term so that your conclusion follows by definition.',
    'Defining "violence" narrowly or broadly enough that a disputed case is settled without argument.',
    'Stipulating a definition for clarity is legitimate and necessary. The fallacy is stipulating one that does the argumentative work while presented as merely clarifying.'],
  ['loki-fallacy', 'The Fallacy Fallacy', 'ambiguity',
    'Concluding a claim is false because an argument for it was fallacious.',
    'Someone defends a true statement badly; you conclude the statement is false.',
    'A bad argument gives you no reason to BELIEVE the conclusion, but no reason to reject it either. This one is worth knowing precisely because a list like this makes it easy to commit.'],

  // ── Formal ───────────────────────────────────────────────────────────────
  ['affirming-consequent', 'Affirming the Consequent', 'formal',
    'If P then Q; Q; therefore P. Invalid.',
    '"If it rained, the pavement is wet. The pavement is wet. So it rained." The sprinkler is also available.',
    'This is the structure of most scientific inference, which is why it is not simply a mistake: theories predict observations, and observations support theories inductively. It is invalid as DEDUCTION, not worthless as evidence.'],
  ['denying-antecedent', 'Denying the Antecedent', 'formal',
    'If P then Q; not P; therefore not Q. Invalid.',
    '"If you study, you pass. You did not study. So you failed." You might pass anyway.',
    'The valid forms are modus ponens (P, so Q) and modus tollens (not Q, so not P). Confusing them with these two is the commonest formal error in ordinary reasoning.'],
  ['undistributed-middle', 'The Undistributed Middle', 'formal',
    'All A are C; all B are C; therefore all A are B. Invalid.',
    '"All authoritarians censor. This government censors. Therefore it is authoritarian." Sharing a property is not sharing an identity.',
    'The conclusion may be true. It just does not follow from these premises, and the argument needs different ones.'],
  ['composition-division', 'Composition and Division', 'formal',
    'Assuming what is true of parts is true of the whole, or the reverse.',
    'Every player is excellent, so the team is excellent. Or: the company is profitable, so this division is.',
    'Some properties genuinely do transfer — a wall of steel bricks is steel. The fallacy is assuming transfer rather than showing it for the property in question.'],
];

export const FALLACIES = ROWS.map(([id, name, family, definition, example, notFallacy]) => {
  if (!FAMILIES.has(family)) throw new Error(`${id}: unknown family "${family}"`);
  return { id, name, family, definition, example, notFallacy };
});

export const FALLACY_FAMILIES = {
  relevance: 'The premise does not bear on the conclusion.',
  presumption: 'The argument assumes what it needs to establish.',
  causal: 'The inference from evidence to cause does not hold.',
  statistical: 'The evidence cannot support a conclusion of that size.',
  ambiguity: 'The argument turns on a shift in meaning.',
  formal: 'The structure is invalid regardless of content.',
};
